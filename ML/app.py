# app.py

from flask import Flask, render_template, jsonify, send_file
from prediction_model.lstm_model import PricePredictionModel
import numpy as np
import matplotlib.pyplot as plt
import io
import base64
import pandas as pd

app = Flask(__name__)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')  # Allow requests from your React app
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/Logs/<int:id>/<item>', methods=['GET'])
def get_predicted_price(id,item):
    prediction_model = PricePredictionModel()

    next_price, _, predicted_prices = prediction_model.predict_next_price(item)

    # Extract the predicted price value
    predicted_price_value = next_price.item()  # Convert to native Python type

    # Parse the date column from the CSV file
    df = pd.read_csv('dataset_prices.csv')
    dates = pd.to_datetime(df['date'])

    # Plot the graph and save it to a BytesIO object
    plt.figure(figsize=(12, 6))
    plt.plot(dates, df[item], label='Actual Prices', color='green')  # Use dates as x-axis
    plt.plot(dates[len(dates) - len(predicted_prices):], predicted_prices, label='Predicted Prices', color='blue')  # Use dates as x-axis

    # Find the index of the date you want to highlight (e.g., August 1st)
    target_date = pd.to_datetime('2023-08-01')
    
    if target_date in dates:
        target_index = dates[dates == target_date].index[0]

        # Highlight the predicted price at the specified date
        plt.scatter(dates.iloc[target_index], predicted_price_value, color='red', marker='o', label='Predicted Price on August 1st')

    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.title('Price Prediction')
    plt.legend()

    img_stream = io.BytesIO()
    plt.savefig(img_stream, format='png')
    img_stream.seek(0)
    plt.close()

    # Encode the image as base64
    img_base64 = base64.b64encode(img_stream.read()).decode('utf-8')

    response = {
        'predicted_price': predicted_price_value,
        'graph': img_base64
    }

    return jsonify(response)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=False)
