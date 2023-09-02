import { createContext, useContext, useReducer, useEffect } from "react";
import { Reducer } from "./Reducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let newCartData = localStorage.getItem("theCart");
  if (!newCartData) {
    return [];
  } else {
    return JSON.parse(newCartData);
  }
};

const initialState = {
  cart: [],
  total_item: "",
  total_price: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToCart = (ID, Type, TodayPrice, Image, Name, Quantity, item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ID, Type, TodayPrice, Image, Name, Quantity, item },
    });
  };

  const removeItem = (ID) => {
    dispatch({ type: "REMOVE_ITEM", payload: ID });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    dispatch({ type: "GET_TOTAL_PRICE" });
    localStorage.setItem("theCart", JSON.stringify(state.cart));
  }, [state.cart]);

  const setDecrease = (ID) => {
    dispatch({ type: "DECREMENT", payload: ID });
  };

  const setIncrease = (ID) => {
    dispatch({ type: "INCREMENT", payload: ID });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, setDecrease, setIncrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
