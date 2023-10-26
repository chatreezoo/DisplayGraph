import React from "react";
import "./Card.css";import {DisplayGraph}  from "./DisplayGraph";


function Card() {
  return (
    <div className="card">
      <div className="card_1">
        <p2>แปลงตัวอย่างที่ 1</p2>
        <div className="button">
          <button>เปิด</button>
          <button>ปิด</button>
        </div>
      </div>

      <div className="card_1">
        <p2>แปลงตัวอย่างที่ 2</p2>
        <div className="button">
          <button>เปิด</button>
          <button>ปิด</button>
        </div>
      </div>

      <div className="card_1">
        <p2>ตรางแสดงผลรวม</p2>
        <DisplayGraph/>
        
      </div>
    </div>
  );
}

export default Card;
