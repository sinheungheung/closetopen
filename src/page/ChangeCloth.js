import React, { useState } from 'react';
import '../css/ChangeCloth.css';
import { useNavigate } from 'react-router-dom';

const ChangeCloth = () => {
  const movePage = useNavigate();
  let clothes_index = 0;
  let draggedItem = null;

  const clothes_img = [
    '../images/ShortTshirt-Empty.png',
    '../images/Knit-Empty.png',
    '../images/WindBreaker-Empty.png',
    '../images/Short-Empty.png',

    '../images/LongSkirt.png',
    '../images/Slacks.png',
    '../images/JoggerPants.png',
    '../images/CargoPants.png'
  ];

  function handleDragStart(event) {
    draggedItem = event.target;
    console.log(draggedItem.src);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    document.getElementById('Character').src = draggedItem.src;
    const mainGameElement = document.getElementById('MainGame');
    if (mainGameElement) {
      mainGameElement.src = draggedItem.src;
    }
  }

  function changeOnFooter() {
    document.getElementById('onoff').style.display = 'block';
  }

  function changeOffFooter() {
    document.getElementById('onoff').style.display = 'none';
  }

  function upclothesBotton() {
    if (clothes_index >= 7) {
      clothes_index = 0;
    } else {
      clothes_index++;
    }
    document.getElementById('Character').src = clothes_img[clothes_index];
  }

  function downclothesBotton() {
    if (clothes_index <= 0) {
      clothes_index = 7;
    } else {
      clothes_index--;
    }
    document.getElementById('Character').src = clothes_img[clothes_index];
  }

  return (
    <div className="MainGame">

      <img src="Img/Character.png" id="character" style={{width:'100%', height:'100%', objectFit:'contain'}}></img>

      <img src='../images/ShortTshirt-Empty.png' id="ShortTshirt" style={{width:'100%', height:'100%', objectFit:'contain'}} draggable="true" onDragStart={handleDragStart} ></img>
      <img src= '../images/Knit-Empty.png' id="Knit" style={{width:'100%', height:'100%', objectFit:'contain'}} draggable="true" onDragStart={handleDragStart}></img>
      <img src='../images/WindBreaker-Empty.png' id="WindBreaker" style={{width:'100%', height:'100%', objectFit:'contain'}} draggable="true" onDragStart={handleDragStart}></img>
      <img src= '../images/Short-Empty.png' id="Short" style={{width:'100%', height:'100%', objectFit:'contain'}} draggable="true" onDragStart={handleDragStart} ></img>

      <img src='../images/LongSkirt.png' id="LongSkirt" style={{width:'100%', height:'100%', objectFit:'contain'}} draggable="true" onDragStart={handleDragStart}></img>
      <img src='../images/Slacks.png' id="Slacks" style={{width:'100%', height:'100%', objectFit:'contain'}} draggable="true" onDragStart={handleDragStart} ></img>
      <img src='../images/JoggerPants.png' id="JoggerPants" style={{width:'100%', height:'100%', objectFit:'contain'}} draggable="true" onDragStart={handleDragStart} ></img>
      <img src= '../images/CargoPants.png'id="CargoPants" style={{width:'100%', height:'100%', objectFit:'contain'}} draggable="true" onDragStart={handleDragStart}></img>
      
      <i class="fa fa-share fa-flip-horizontal fa-3x" id="icon" aria-hidden="true" onclick="downclothesBotton()"></i>
                <i class="fa fa-share fa-3x" aria-hidden="true" onclick="upclothesBotton()"></i>

      <div className="OpenCloset"></div>
      <div className="Character"></div>

  
      {/* 상의 이미지 */}
      <div
        className="ShortTshirt-Empty"
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
      <div
        className="Knit-Empty"
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
      <div
        className="WindBreaker-Empty"
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
      <div
        className="Short-Empty"
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>

      {/* 하의 이미지 */}
      <div
        className="LongSkirt"
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
      <div
        className="Slacks"
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
      <div
        className="JoggerPants"
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
      <div
        className="CargoPants"
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>

      <div
        className="LeftButton"
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>

<div
        className="RightButton"
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
    </div>
  );
};

export default ChangeCloth;
