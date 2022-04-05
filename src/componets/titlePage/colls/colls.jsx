import React from "react";
import "./colls.css";

function Colls({ col }) {
  return (
    <div className="colls">
      <div className="colls_itemBox">
        <div className="colls_icon">
          <img src={col} />
        </div>
      </div>
    </div>
  );
}
export default Colls;
