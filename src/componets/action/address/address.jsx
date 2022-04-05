import React from "react";
import "./address.css";
import Logo from "../images/apple.png";
import AddressItem from "./addressItem/addressItem";
import { YMaps, Map } from "react-yandex-maps";

function Address() {
  return (
    <div className="address">
      <div className="container">
        <div className="logoApple">
          <img src={Logo} /> <p>Apple Music</p>
        </div>
        <div className="address_item">
          <AddressItem />
          <AddressItem />
          <AddressItem />
        </div>
        <div className="map">
          <YMaps>
            <div>
              <Map
                width="100%"
                height="500px"
                defaultState={{ center: [55.75, 37.57], zoom: 5 }}
              />
            </div>
          </YMaps>
        </div>
      </div>
    </div>
  );
}
export default Address;
