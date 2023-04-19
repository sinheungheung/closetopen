import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  function goChooseSpotPage() {
    navigate('/ChooseSpotPage');
  }

  return (
    <div className="button">
      <div className='map'></div>
      <div className='osaka-btn' onClick={goChooseSpotPage}></div>
      <div className='tokyo-btn' onClick={goChooseSpotPage}></div>
      <div className='sapporo-btn' onClick={goChooseSpotPage}></div>
    </div>
  )
}

export default Button;