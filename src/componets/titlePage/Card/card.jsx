import React from "react";
import "./card.css";
function Card({ images, icons, text }) {
  return (
    <div className="card_item">
      <div className="card_img">
        <img src={images} />
      </div>
      <div className="card_icons">
        <img src={icons} /> <p> {text}</p>
      </div>
    </div>
  );
}
export default Card;
