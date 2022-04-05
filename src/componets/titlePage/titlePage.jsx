import React, { useState } from "react";

import "./titlePage.css";
import ButtonItem from "./button/button";
import Coupon from "./coupon/coupon";
import Card from "./Card/card";
import Colls from "./colls/colls";


import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";

import cardImg1 from "./Card/images/images1.png";
import cardImg2 from "./Card/images/images2.png";
import cardImg3 from "./Card/images/images3.png";
import cardIcons1 from "./Card/images/icons1.png";
import cardIcons2 from "./Card/images/icons2.png";
import cardIcons3 from "./Card/images/icons3.png";

import colls1 from "./colls/icon/colls1.png";
import colls2 from "./colls/icon/colls2.png";
import colls3 from "./colls/icon/colls3.png";
import colls4 from "./colls/icon/colls4.png";
import colls5 from "./colls/icon/colls5.png";

import colls6 from "./colls/icon/colls6.png";
import colls7 from "./colls/icon/colls7.png";
import colls8 from "./colls/icon/colls8.png";

import colls9 from "./colls/icon/colls9.png";
import colls10 from "./colls/icon/colls10.png";
import colls11 from "./colls/icon/colls11.png";

import colls12 from "./colls/icon/colls12.png";
import colls13 from "./colls/icon/colls13.png";
import colls14 from "./colls/icon/colls14.png";
import colls15 from "./colls/icon/colls15.png";
import colls16 from "./colls/icon/colls16.png";

function TitlePage() {
  const [check, setCheck] = useState(true);
  console.log(check);

  return (
    <div className="titlePage">
      <div className="container">
        <div className="title_item">
          <p> Партнеры и предложения</p>
        </div>
        <div className="titlePage_btn">
          <ButtonItem btnName="Все партнеры" />
          <ButtonItem btnName="Популярные" />
          <ButtonItem btnName="Супермаркеты" />
          <ButtonItem btnName="Кафе и рестораны" />
          <ButtonItem btnName="Такси" />
          <ButtonItem btnName="Красота" />
          <ButtonItem btnName="Электроника и бытовая техника" />
          <ButtonItem btnName="Зоотовары" />
          <ButtonItem btnName="Кино и театр" />
          <ButtonItem btnName="• • •" />
        </div>
        <div className="titlePage_item">
          {/* style={{color: '#00D36D'}} */}
          <p style={check ? { color: "#000000" } : { color: "#00D36D" }}>
            {" "}
            Начисляют спасибо
          </p>

          {/* {check? '#00D36D' : '#000000'} */}

          <div className="titlePage_check">
            <input
              onChange={(e) => {
                console.log(e.target.value);
              }}
              type="checkbox"
              checked={check}
            />
            <span
              className="slider round"
              onClick={() => {
                setCheck((prev) => !prev);
              }}
            ></span>
          </div>
          <p style={check ? { color: "#00D36D" } : { color: "#000000" }}>
            Принимают спасибо
          </p>
        </div>
        <div className="titilePage_coupon">
          <Coupon
            sum="1,5%"
            text="Спасибо от суммы покупки"
            images={img1}
            name="М.Видео"
          />
          <Coupon
            sum="3%"
            text="Спасибо от суммы покупки"
            images={img2}
            name="Бургер Кинг "
          />
          <Coupon
            sum="4,5%"
            text="Спасибо от суммы покупки"
            images={img3}
            name="Холодильник.ру"
          />
          <Coupon
            sum="От 1,5%"
            text="Спасибо от суммы покупки"
            images={img4}
            name="BORK"
          />
          <Coupon
            sum="1,5%"
            text="Спасибо от суммы покупки"
            images={img5}
            name="Евросеть"
          />
        </div>
        <div className="coupon_btn">
          <button>
            <a href="#">Еще 4 партнера </a>
          </button>
        </div>
        <div className="titlePage_Card">
          <div className="card_title">
            <p> 3 предложения в категории «Электроника и бытовая техника»</p>
          </div>
          <div className="titlePage_cardImg">
            <Card
              images={cardImg1}
              icons={cardIcons1}
              text="20% спасибо за технику Electrolux"
            />
            <Card
              images={cardImg2}
              icons={cardIcons2}
              text="10% спасибо за покупки в черную пятницу"
            />
            <Card
              images={cardImg3}
              icons={cardIcons3}
              text="15% спасибо для студентов"
            />
          </div>
          <div className="card_btn">
            <button>
              <a href="#">Еще 4 предложения </a>
            </button>
          </div>
        </div>
        <div className="colls_container">
          <div className="colls_item1">
            <div className="colls_box1">
              <Colls col={colls1} />
              <Colls col={colls2} />
              <Colls col={colls3} />
              <Colls col={colls4} />
              <Colls col={colls5} />
            </div>
          </div>
          <div className="colls_text">
            <p>Скидки за бонусы</p>
          </div>
        </div>

        <div className="box">
          <div className="colls_item2">
            <div className="colls_box2">
              <Colls col={colls6} />
              <Colls col={colls7} />
              <Colls col={colls8} />
            </div>

            <div className="colls_text">
              <p>Большой % начисления</p>
            </div>
          </div>
          <div className="colls_item2">
            <div className="colls_box3">
              <Colls col={colls9} />
              <Colls col={colls10} />
              <Colls col={colls11} />
            </div>
            <div className="colls_text">
              <p>Выгодные купоны</p>
            </div>
          </div>
        </div>

        <div className="colls_container2">
          <div className="colls_item2">
            <div className="colls_box4">
              <Colls col={colls12} />
              <Colls col={colls13} />
              <Colls col={colls14} />
              <Colls col={colls15} />
              <Colls col={colls16} />
            </div>
          </div>
          <div className="colls_text">
            <p>Персональное исходя из трат</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TitlePage;
