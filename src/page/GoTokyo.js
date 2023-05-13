import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const GoTokyo = () => {
const movePage = useNavigate();

function goGameStart(){
  movePage('/GameStart');
}
return (
  <div class="parent2">
  <div className="CheckTokyo" onClick={goGameStart}></div>
  <div class="TOKYO"></div>
  <div class="TOKYO-ex"></div>
  <div class="CloseButton"></div>
  <div class="SomeArea"></div>
  <div class="Disneyland-img"></div>
  <div class="Disneyland-kr"></div>
  <div class="UenoPark-img"></div>
  <div class="UenoPark-kr"></div>
  <div class="Meiji-img"></div>
  <div class="Meiji-kr"></div>
  <div class="NextButton"></div>
  </div>
  );
};


export default GoTokyo;