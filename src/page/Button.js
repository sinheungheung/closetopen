import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  function GoOsaka() {
    navigate('/GoOsaka');
  }


  function GoTokyo() {
    navigate('/GoTokyo');
  }

  
  function GoSapporo() {
    navigate('/GoSapporo');
  }

  return (
    <div className="button">
      <div className='map'></div>
      <div className='osaka-btn' onClick={GoOsaka}></div>
      <div className='tokyo-btn' onClick={GoTokyo}></div>
      <div className='sapporo-btn' onClick={GoSapporo}></div>
    </div>
  )
}

export default Button;