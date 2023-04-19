import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  function goStartPage() {
    navigate('/ChooseSpotPage');
  }

  return (
    <div className="button">
      <div className='map'></div>
      <div className='osaka-btn' onClick={goStartPage}></div>
      <div className='tokyo-btn' onClick={goStartPage}></div>
      <div className='sapporo-btn' onClick={goStartPage}></div>
    </div>
  )
}

export default Button;