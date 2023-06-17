import React, { useState }  from 'react'
import '../css/GoSapporo.css';
import { useNavigate } from 'react-router-dom';

const GoSapporo = () => {
const movePage = useNavigate();
const [hover, setHover] = useState(false);

function goStory() {
  navigate('/secondstorytelling', { state : { value : 'sapporo'}});
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
      <div className="CheckSapporo" onClick={goStory}></div>
      <div class="SAPPORO"></div>
      <div class="SAPPORO-ex"></div>
      <div class="SomeArea"></div>
      <div class="IceFestival-img" onClick={goStory}></div>
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



