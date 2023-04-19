import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
const movePage = useNavigate();

  function goChooseSpot(){
    movePage('/Button');
  }
  return (
    <div className="start-page" >
      <div className='start-logo'></div>
      <div className='start-btn'  onClick={goChooseSpot}></div>
    </div>
  )
}

export default StartPage
