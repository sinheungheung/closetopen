import React, { useState }  from 'react'
import '../css/GoSapporo.css';
import { useNavigate } from 'react-router-dom';

const GoSapporo = () => {
const movePage = useNavigate();
const [hover, setHover] = useState(false);

function goGameStart(){
  movePage('/ChangeCloth');
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
   <div class="parent1">
      <div className="CheckSapporo" onClick={goGameStart}></div>
      <div class="SAPPORO"></div>
      <div class="SAPPORO-ex"></div>
      <div class="SomeArea"></div>
      <div class="IceFestival-img" onClick={goGameStart}></div>
      <div class="ArtMuseum-img"></div>
      <div class="ShoppingStore-img"></div>
      <div class="CloseButton" onClick={handleClick}></div>
      <div class="IceFestival-kr"></div>
      <div class="ArtMuseum-kr"></div>
      <div class="ShoppingStore-kr"></div>
      </div>

  );
};
export default GoSapporo;



