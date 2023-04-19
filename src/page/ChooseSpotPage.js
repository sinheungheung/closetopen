import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const ChooseSpotPage = () => {
const movePage = useNavigate();

function goGameStart(){
  movePage('/GameStart');
}
return (
  <div className="chooseSpotPage" >
    <div className='NocheckOsaka' onClick={goGameStart}></div>
    <div className='NocheckTokyo'  onClick={goGameStart}></div>
    <div className='NocheckSapporo' onClick={goGameStart}></div>
  </div>
  )
}

export default ChooseSpotPage;



