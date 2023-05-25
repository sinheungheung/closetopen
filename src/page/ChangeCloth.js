import React, { useState } from 'react'
import '../css/ChangeCloth.css';
import { useNavigate } from 'react-router-dom';

const ChangeCloth = () => {
const movePage = useNavigate();
const [hover, setHover] = useState(false);

// function (){
//   movePage('/');
// }
const handleMouseOver = () => {
  setHover(true);
};

const handleMouseOut = () => {
  setHover(false);
};
var TopClothes_img = ['../images/ShortTshirt-Empty.png',
                      '../images/Knit-Empty.png',
                      '../images/WindBreaker-Empty.png',
                      '../images/Short-Empty.png'];
var TopClothes_index = 0;

let draggedItem = null;

function drag(){
  draggedItem = this;
  console.log(draggedItem.src);
}
function dragenter(){
  document.getElementById('chara-clo').src=TopClothes_img[TopClothes_index];
}
function changeOnFooter(){
  document.getElementById('onoff').style.display = "block";
}
function changeOffFooter(){
  document.getElementById('onoff').style.display = "none";
}

function upclothesBotton(){
  if(TopClothes_index>=3){
      TopClothes_index=0;
  }else{
      TopClothes_index++;
  }
  document.getElementById('chara-clothes').src = TopClothes_img[TopClothes_index];
}
function downclothesBotton(){
  if(TopClothes_index<=0){
      TopClothes_index=3;
  }else{
      TopClothes_index--;
  }
  document.getElementById('chara-clothes').src = TopClothes_img[TopClothes_index];
}


    return (
      <div className="MainGame">
         <div className="OpenCloset"></div>
         <div className="Character"></div> 
        {/* 상의 이미지 */}
         <div className="ShortTshirt-Empty"></div>  
         <div className="Knit-Empty"></div>         
         <div className="WindBreaker-Empty"></div>  
         <div className="Short-Empty"></div>  
      </div>
    );
  };
  
  export default ChangeCloth;