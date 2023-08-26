import "../App.css";
import React from "react";
import { useCartContext } from "./Cart_Context";
import { toast } from "react-toastify";

const CartHelp = ({
  ID,
  State,
  District,
  Market,
  Name,
  Type,
  Date,
  TodayPrice,
  YesterdayPrice,
  DayBeforeYesterdayPrice,
  Image,
  Quantity,
}) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();

  const notifyItemDelete = () => {
    toast.success("Item Deleted from cart!", {
      position: "top-right",
      autoClose: 3000, // Display duration in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={Image} alt={ID}></img>
        </div>

        <div className="title">
          <h2>{Name}</h2>
          <p>{Type}</p>
        </div>

        <div className="add-minus-quantity">
          <i
            className="fa-solid fa-minus minus ilink"
            onClick={() => setDecrease(ID)}
          ></i>
          <input type="text" placeholder={Quantity} disabled />
          <i
            className="fa-solid fa-plus add ilink"
            onClick={() => setIncrease(ID)}
          ></i>
        </div>

        <div className="price">
          <h3>₹{TodayPrice}</h3>
        </div>

        <div className="remove-item">
          <i
            className="fa-solid fa-trash remove ilink"
            onClick={() => {
              removeItem(ID);
              notifyItemDelete();
            }}
          ></i>
          {/* <button onClick={()=>removeItem(ID)}>--</button> */}
        </div>
      </div>
    </>
  );
};

export default CartHelp;
