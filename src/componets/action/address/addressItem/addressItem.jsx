import React from "react";
import "./addressItem.css";
import logo from "./img/icon.svg";
import img from "./img/Group.svg";
import img1 from "./img/Group1.svg";
function AddressItem() {
  return (
    <div className="AddressItem">
      <div className="item_img">
        <img src={logo} />
        <p> Москва, ул. Большая Татарская, 21</p>
      </div>
      <div className="item_add">
        <div className="metro1">
          <img src={img} /> <p>Маяковская</p>
        </div>
        <div className="metro1">
          <img src={img1} /> <p>Лубянка</p>
        </div>
      </div>
      <div className="tel">
        <p>+7 495 220-30-44</p>
      </div>
      <div className="grafik">
        <p> Ежедневно с 09:00 до 21:00</p>
      </div>
      <div className="add_link">
        <p>
          <a href="#">apple.com </a>
        </p>
      </div>
    </div>
  );
}
export default AddressItem;
