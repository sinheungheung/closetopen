import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const GoSapporo = () => {
const movePage = useNavigate();

function goGameStart(){
  movePage('/GameStart');
}

return (
   <div class="parent1">
      <div className="CheckSapporo" onClick={goGameStart}></div>
      <div class="SAPPORO"></div>
      <div class="SAPPORO-ex"></div>
      <div class="CloseButton"></div>
      <div class="SomeArea"></div>
      <div class="IceFestival-img"></div>
      <div class="IceFestival-kr"></div>
      <div class="ArtMuseum-img"></div>
      <div class="ArtMuseum-kr"></div>
      <div class="ShoppingStore-img"></div>
      <div class="ShoppingStore-kr"></div>
      <div class="NextButton"></div>
      </div>

  );
};
export default GoSapporo;



