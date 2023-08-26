import React from "react";
import "../App.css";
import { useCartContext } from "./Cart_Context";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import CartHelp from "./CartHelp";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const { cart, total_item, total_price } = useCartContext();

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

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
            <span className="total-items-count">{total_item}</span> items in
            your shopping cart
          </p>

          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {
                  cart.map((curItem) => {
                    return <CartHelp key={curItem.ID} {...curItem} />;
                  })
                  // <CartHelp/>
                }
              </Scrollbars>
            </div>
          </div>

          <div className="cart-total">
            <h3>
              Cart Total : <span>₹{total_price}</span>
            </h3>
            <Link to={`/Payment/${total_price}`}>
              <button>Checkout</button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
