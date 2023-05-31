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
    document.getElementById('MainGame').src = draggedItem.src;
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
    document.getElementById('MainGame').src = clothes_img[clothes_index];
  }

  function downclothesBotton() {
    if (clothes_index <= 0) {
      clothes_index = 7;
    } else {
      clothes_index--;
    }
    document.getElementById('MainGame').src = clothes_img[clothes_index];
  }

  return (
    <div className="MainGame">
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
    </div>
  );
};

export default ChangeCloth;
