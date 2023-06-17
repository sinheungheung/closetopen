import React, { useState } from "react";
import '../css/Collection.css';
import { useNavigate } from 'react-router-dom';


const Collection = () => {
  const navigate = useNavigate();

  // X를 누르면 /Storytelling2페이지로 이동
  function handleClick() {
    navigate('/Storytelling2');
  }

  return (
    <div class="main">
        <div class="CloseButton" onClick={handleClick}></div>
        <div class="CollectBox"></div> 
        <div class="CollectLeft"></div> 
        <div class="CollectRight"></div> 
   
      </div>
      
  );
  
};

export default Collection;
