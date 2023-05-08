import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const GoTokyo = () => {
const movePage = useNavigate();

function goGameStart(){
  movePage('/GameStart');
}
return (
  <div className="gotokyo" >
    <div className='CheckTokyo'  onClick={goGameStart}></div>
  </div>
  )
}


export default GoTokyo;