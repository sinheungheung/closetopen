import React, { useState } from "react";
import "../css/Collection.css";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  // X를 누르면 /Storytelling2페이지로 이동
  function handleClick() {
    navigate("/secondstorytelling");
  }

  function handleRightButtonClick() {
    setTranslateX((prevTranslateX) => prevTranslateX + 100);
  }

  function handleLeftButtonClick() {
    setTranslateX((prevTranslateX) => prevTranslateX - 100);
  }

  return (
    <div className="main">
      <div className="collection">
        <div className="CloseButton" onClick={handleClick}></div>
        <div className="CollectContainer">
          <div
            className="CollectBox"
            style={{ transform: `translateX(${translateX}%)` }}
          ></div>
          <div
            className="CollectBox2"
            style={{ transform: `translateX(${translateX}%)` }}
          ></div>
          <div
            className="CollectBox3"
            style={{ transform: `translateX(${translateX}%)` }}
          ></div>
        </div>
        <div className="CollectLeft" onClick={handleLeftButtonClick}></div>
        <div className="CollectRight" onClick={handleRightButtonClick}></div>
      </div>
    </div>
  );
};

export default Collection;
