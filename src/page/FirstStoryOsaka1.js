import React, { useState } from 'react'
import '../css/FirstStory.css';
import { useNavigate } from 'react-router-dom';

const FirstStoryOsaka1 = () => {
const movePage = useNavigate();
const [hover, setHover] = useState(false);

function goFirstStory(){
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
  navigate('/FirstStoryOsaka2');
}
return (
  <div class="parent">
  <div class="ClosetBackground"></div>
  <div class="SquareBalloon"></div>
  <div class="OsakaFirst-1"></div>
  <div class="TriangleButton" onClick={handleClick}></div>
  </div>
  );
};


export default FirstStoryOsaka1;