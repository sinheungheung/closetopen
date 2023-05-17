import React, { useState } from 'react'
import '../css/GoTokyo.css';
import { useNavigate } from 'react-router-dom';

const GoTokyo = () => {
const movePage = useNavigate();
const [hover, setHover] = useState(false);

function goGameStart(){
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
  <div class="parent2">
  <div className="CheckTokyo" onClick={goGameStart}></div>
  <div class="TOKYO"></div>
  <div class="TOKYO-ex"></div>
  <div class="SomeArea"></div>
  <div class="Disneyland-img"></div>
  <div class="UenoPark-img"></div>
  <div class="Meiji-img" onClick={goGameStart}></div>
  <div class="CloseButton" onClick={handleClick}></div>
  <div class="Disneyland-kr"></div>
  <div class="UenoPark-kr"></div>
  <div class="Meiji-kr"></div>
  {/* <div class="NextButton"></div> */}
  </div>
  );
};


export default GoTokyo;