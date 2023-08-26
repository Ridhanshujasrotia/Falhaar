export const Reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.ID !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "INCREMENT") {
    const updatedCart = state.cart.map((curElem) => {
      if (curElem.ID === action.payload) {
        let decAmount = curElem.Quantity + 1;

        return { ...curElem, Quantity: decAmount };
      } else {
        return curElem;
      }
    });

    return { ...state, cart: updatedCart };
  }

  if (action.type === "DECREMENT") {
    const updatedCart = state.cart.map((curElem) => {
      if (curElem.ID === action.payload) {
        let decAmount = curElem.Quantity - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }

        return { ...curElem, Quantity: decAmount };
      } else {
        return curElem;
      }
    });

    return { ...state, cart: updatedCart };
  }

  if (action.type === "GET_TOTAL") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { Quantity } = curElem;
      initialVal = initialVal + Quantity;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "GET_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { TodayPrice, Quantity } = curElem;
      initialVal = initialVal + TodayPrice * Quantity;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_price,
    };
  }

  if (action.type === "ADD_TO_CART") {
    let { ID, Type, TodayPrice, Image, Name, Quantity, item } = action.payload;

    let cartProduct;
    let existingProduct = state.cart.find((curItem) => curItem.ID === ID);

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.ID === ID) {
          let newAmount = curElem.Quantity + Quantity;
          return {
            ...curElem,
            Quantity: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      cartProduct = {
        ID: ID,
        Name: Name,
        Type: Type,
        TodayPrice: TodayPrice,
        Image: Image,
        Quantity: Quantity,
      };
    }

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  return state;
};
