import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

function ButtonItem({ btnName }) {
  return (
    <div className="buttonItem">
      <button>
        <Link to="/about">{btnName} </Link>
      </button>
    </div>
  );
}
export default ButtonItem;
