import React, { useState } from "react";
import '../css/GoOsaka.css';
import { useNavigate } from 'react-router-dom';


const GoOsaka = () => {
  const movePage = useNavigate();
  const [hover, setHover] = useState(false);

  function goGameStart() {
    movePage('/GameStart');
  }
  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  // X를 누르면 Button페이지로 이동
  const navigate = useNavigate();

  function handleClick() {
    navigate('/Button');
  }

  return (
    <div class="parent">
      <div className="CheckOsaka" onClick={goGameStart}></div>
      <div class="OSAKA"></div>
      <div class="OSAKA-ex"></div>
      <div class="SomeArea"></div> 
      <div class="Harukas-img"></div>
      <div class="Glycosan-img" onClick={goGameStart}></div>
      <div class="Zoo-img"></div>
      <div class="CloseButton" onClick={handleClick}></div>
      <div class="Harukas-kr"></div>     
      <div class="Glycosan-kr"></div>
      <div class="Zoo-kr"></div>
      {/* <div class="NextButton"></div> */}
      </div>
      
  );
  
};

export default GoOsaka;
