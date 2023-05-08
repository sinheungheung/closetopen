import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const GoOsaka = () => {
const movePage = useNavigate();

function goGameStart(){
  movePage('/GameStart');
}
return (
  <div className="goosaka" >
    <div className='CheckOsaka' onClick={goGameStart}></div>
  </div>
  )
}


export default GoOsaka;



