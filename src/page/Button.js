import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  function checkPage() {
    navigate('/checkPage');
  }

  return (
    <div className="App">
      <img className="map" alt="기본 지도" src="Image/map.png" />
      <img
        className="osaka-btn"
        alt="오사카 버튼"
        src="Image/osaka-btn.png"
        onClick={checkPage}
      />
      <img
        className="tokyo-btn"
        alt="도쿄 버튼"
        src="Image/tokyo-btn.png"
        onClick={checkPage}
      />
      <img
        className="sapporo-btn"
        alt="삿포로 버튼"
        src="Image/sapporo-btn.png"
        onClick={checkPage}
      />
    </div>
  );
};

export default Button;