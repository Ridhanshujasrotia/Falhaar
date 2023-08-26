import React from "react";
import { FaShoppingCart, FaFireAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";
import { useCartContext } from "../pages/Cart_Context";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const { addToCart } = useCartContext();
  const notifyItemAdded = () => {
    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 3000, // Display duration in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const { ID, Type, Market, TodayPrice, Image, Quantity, Name } = item;
  return (
    <div className="productList">
      <div key={ID} className="productCard">
        <Link key={item.ID} to={`/Logs/${item.ID}/${item.Name}`}>
          <img src={Image} alt="product-img" className="productImage"></img>

          <FaFireAlt className={"productCard__fastSelling"} />
        </Link>
        <div className="productCard__content">
          <Link key={item.ID} to={`/Logs/${item.ID}/${item.Name}`}>
            <h3 className="productName">{Name}</h3>
          </Link>
          <div className="displayStack__1">
            <Link key={item.ID} to={`/Logs/${item.ID}/${item.Name}`}>
              <div className="productPrice">₹{TodayPrice} per kg</div>
            </Link>
            <Link to="/Cart">
              <FaShoppingCart className={"productCard__cart"} />
            </Link>
          </div>
          <button
            className="AddToCart"
            onClick={() => {
              addToCart(ID, Type, TodayPrice, Image, Name, Quantity, item);
              notifyItemAdded(); // Call the notify function
            }}
          >
            Add To Cart
          </button>

          <span>Market : {Market}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
