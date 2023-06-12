import React, { useState } from 'react'
import '../css/FirstStory.css';
import { useNavigate } from 'react-router-dom';

const FirstStoryOsaka1 = () => {
const movePage = useNavigate();
const [hover, setHover] = useState(false);

function goOsakaStory2(){
  movePage('/FirstStoryOsaka2');
}
const handleMouseOver = () => {
  setHover(true);
};

const handleMouseOut = () => {
  setHover(false);
};

// X를 누르면 TriangleButton페이지로 이동
const navigate = useNavigate();

function handleClick() {
  navigate('/TriangleButton');
}
return (
  <div class="parent3">
  <div class="FirstStoryOsaka1" onClick={goOsakaStory2}></div>
  <div class="SquareBalloon"></div>
  <div class="OsakaFirst-1"></div>
  <div class="TriangleButton" onClick={handleClick}></div>
  </div>
  );
};


export default FirstStoryOsaka1;