# lstm_model.py

import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import LSTM, Dense

class PricePredictionModel:
    def __init__(self):
        self.model = None
        self.scaler = MinMaxScaler()
        self.seq_length = 30

    def preprocess_data(self, item):
        df = pd.read_csv('dataset_prices.csv')
        prices = df[item].values.reshape(-1, 1)
        prices_scaled = self.scaler.fit_transform(prices)

        X = []
        y = []

        for i in range(len(prices_scaled) - self.seq_length):
            X.append(prices_scaled[i:i + self.seq_length])
            y.append(prices_scaled[i + self.seq_length])

        X = np.array(X)
        y = np.array(y)

        return X, y, prices

    def build_model(self):
        if not self.model:
            self.model = Sequential()
            self.model.add(LSTM(units=50, return_sequences=True, input_shape=(self.seq_length, 1)))
            self.model.add(LSTM(units=50, return_sequences=False))
            self.model.add(Dense(units=1))
            self.model.compile(optimizer='adam', loss='mean_squared_error')

    def train_model(self, X, y):
        if self.model:
            self.model.fit(X, y, batch_size=64, epochs=50)

    def predict_next_price(self, item):
        X, y, prices = self.preprocess_data(item)
        self.build_model()
        self.train_model(X, y)

        latest_data = self.scaler.transform(prices[-self.seq_length:])
        latest_data_scaled = latest_data.reshape(1, self.seq_length, 1)
        next_price_scaled = self.model.predict(latest_data_scaled)
        next_price = self.scaler.inverse_transform(next_price_scaled)[0][0]

        # Make price predictions for plotting
        predicted_prices_scaled = self.model.predict(X)
        predicted_prices = self.scaler.inverse_transform(predicted_prices_scaled)

        return next_price, prices, predicted_prices
