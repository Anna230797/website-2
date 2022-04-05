import React from "react";
import "./header.css";
import logo from "./images/logo.svg";
import Menu from "./menu/menu";
import icon1 from "./images/icon1.svg";
import icon2 from "./images/icon2.svg";
function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="header_box">
          <div className="logo_item">
            <div className="header_logo">
              <img src={logo} />
            </div>
          </div>
          <div className="menu_item">
            <div className="header_menu">
              <Menu name="Купоны и сертификаты" />
              <Menu name="Впечатления" />
              <Menu name="Авиабилеты" />
              <Menu name="Ж/д билеты" />
              <Menu name="Отели" />
              <Menu name="Каршеринг" />
              <Menu name="Театры" />
              <Menu name="Страхование" />
              <Menu name="Как подключиться" />
              <Menu name="Партнеры" />
            </div>
          </div>
          <div className="header_item">
            <div className="header_city">
              <img src={icon1} /> <p>Санкт-Петербург</p>
              <img src={icon2} />
              <button>
                <a href="#">Войти </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
