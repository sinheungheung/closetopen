import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
const movePage = useNavigate();

  function goButton(){
    movePage('/Button');
  }
  return (
    <div className="start-page" >
      <div className='start-logo'></div>
      <div className='start-btn'  onClick={goButton}></div>
    </div>
  )
}

export default StartPage
