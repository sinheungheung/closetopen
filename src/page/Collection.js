import React, { useState, useEffect } from "react";
import "../css/Collection.css";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState(0);
  const [boxCount, setBoxCount] = useState(3); // 첫 시작화면에 CollectBox 3개 보여주기

  // X를 누르면 /Storytelling2페이지로 이동
  function handleClick() {
    navigate("/secondstorytelling");
  }

  function handleLeftClick() {
    setPosition((prevPosition) => prevPosition - 1400); 
    setBoxCount((prevCount) => prevCount + 1); 
  }

  function handleRightClick() {
    setPosition((prevPosition) => prevPosition + 1400); 
    setBoxCount((prevCount) => prevCount + 1); 
  }

  
  const generateCollectBoxes = () => {
    const boxes = [];
    for (let i = 0; i < boxCount; i++) {
      const leftPosition = 300 + i * 1550; 
      boxes.push(
        <div
          className={`CollectBox CollectBox${i + 1}`}
          key={i + 1}
          style={{ transform: `translateX(${position}px)`, left: `${leftPosition}px` }}
        ></div>
      );
    }
    return boxes;
  };

  useEffect(() => {
    setBoxCount(3);
  }, []);

  return (
    <div className="main">
      <div className="collection">
        <div className="CloseButton" onClick={handleClick}></div>
        {generateCollectBoxes()}
        <div className="CollectLeft" onClick={handleLeftClick}></div>
        <div className="CollectRight" onClick={handleRightClick}></div>
      </div>
    </div>
  );
};

export default Collection;
