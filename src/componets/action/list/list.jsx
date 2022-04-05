import React from "react";
import './list.css'
function List({ text}) {
  return (
    <div className="list">
      <li>{text} </li>
    </div>
  );
}
export default List;
