import React, { useState } from "react";
import '../css/Collection.css';
import { useNavigate } from 'react-router-dom';

const Collection = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState(0);

  // X를 누르면 /Storytelling2페이지로 이동
  function handleClick() {
    navigate('/secondstorytelling');
  }

  function handleLeftClick() {
    setPosition(prevPosition => prevPosition - 1400); // Adjust the value according to your needs
  }

  function handleRightClick() {
    setPosition(prevPosition => prevPosition + 1400); // Adjust the value according to your needs
  }

  return (
    <div className="main">
      <div className="collection">
        <div className="CloseButton" onClick={handleClick}></div>
        <div className="CollectBox" style={{ transform: `translateX(${position}px)` }}></div>
        <div className="CollectLeft" onClick={handleLeftClick}></div>
        <div className="CollectRight" onClick={handleRightClick}></div>
      </div>
    </div>
  );
};

export default Collection;
