import React from "react";
import "./footer.css";
import Menu from "../header/menu/menu";
import Logo from "./logo/logo";

import SberLogo from "./images/sberlogo.svg";
import google from "./images/google-play.svg";
import app from "./images/app-store.svg";
import fb from "./images/fb.svg";
import inst from "./images/inst.svg";
import ok from "./images/ok.svg";
import vk from "./images/vk.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="footer_group">
            <div className="num">
              <p>900 </p>
            </div>
            <div className="num_text">
              <p> По России бесплатно</p>
            </div>
          </div>
          <div className="footer_menu">
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
        <div className="footer_logo">
          <div className="sberLogo">
            <Logo logoImg={SberLogo} />
          </div>
          <div className="footer_link">
            <div className="google-play">
              <Logo logoImg={google} />
            </div>
            <div className="app-store">
              <Logo logoImg={app} />
            </div>
          </div>
          <div className="footer_icons">
            <div className="icons">
              <Logo logoImg={fb} />
            </div>
            <div className="icons">
              <Logo logoImg={inst} />
            </div>
            <div className="icons">
              <Logo logoImg={ok} />
            </div>
            <div className="icons">
              <Logo logoImg={vk} />
            </div>
          </div>
        </div>
        <div className="footer_text">
          <div className="footer_name">
            <p>© 1997—2019 ПАО Сбербанк.</p>
          </div>
          <div className="footer_text1">
            <p>
              Политика АО «ЦПЛ» в отношении обработки персональных данных и
              Согласие на обработку данных участника Программы «Спасибо от
              Сбербанка»
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
