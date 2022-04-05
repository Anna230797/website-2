import React from "react";
import "./coupon.css";

function Coupon({ sum, text, images, name }) {
  return (
    <div className="coupon">
      <div className="title">
        <p>{sum}</p>
      </div>
      <div className="subTitle">
        <p>{text} </p>
      </div>
      <div className="coupon_images">
        <img src={images} />
      </div>
      <div className="coupon_name">
        <p>{name}</p>
      </div>
    </div>
  );
}
export default Coupon;
