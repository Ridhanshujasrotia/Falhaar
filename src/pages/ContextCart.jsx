import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import CartHelp from "./CartHelp";
import { Link } from "react-router-dom";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, totalItems, totalAmount } = useContext(CartContext);

  return (
    <>
      <div className="cart">
        <div className="continue-shopping">
          <Link to="/Shop">
            <i className="fa-solid fa-arrow-left ilink"></i>
            <h4>CONTINUE SHOPPING</h4>
          </Link>
        </div>

        <section className="main-cart-section">
          <h2>SHOPPING CART</h2>
          <br />
          <p className="total-items">
            you currently have{" "}
            <span className="total-items-count">{totalItems}</span> items in
            shopping cart
          </p>

          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {item.map((curItem) => {
                  return <CartHelp key={curItem.ID} {...curItem} />;
                })}
              </Scrollbars>
            </div>
          </div>

          <div className="cart-total">
            <h3>
              Cart Total : <span>₹{totalAmount}</span>
            </h3>
            <Link to={`/Payment/${totalAmount}`}>
              <button>Checkout</button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContextCart;
