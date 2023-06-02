import React, { useState } from 'react';
import '../css/ChangeCloth.css';
import { useNavigate } from 'react-router-dom';

import ShortTshirtEmpty from '../images/ShortTshirt-Empty.png';
import Knit from '../images/Knit-Empty.png';
import WindBreaker from '../images/WindBreaker-Empty.png';
import ShortEmpty from '../images/Short-Empty.png';

const ChangeCloth = () => {
  const movePage = useNavigate();

  const topClothes = [ShortTshirtEmpty, Knit, WindBreaker, ShortEmpty];

  const [currentTopIndex, setCurrentTopIndex] = useState(0);

  const previousTopSlide = () => {
    const lastIndex = topClothes.length - 1;
    const index = currentTopIndex === 0 ? lastIndex : currentTopIndex - 1;
    setCurrentTopIndex(index);
  };

  const nextTopSlide = () => {
    const lastIndex = topClothes.length - 1;
    const index = currentTopIndex === lastIndex ? 0 : currentTopIndex + 1;
    setCurrentTopIndex(index);
  };

  return (
    <div className="MainGame">
      <div className="OpenCloset"></div>
      <div className="Character"></div>

      {/* 상의 이미지 */}
      <div className="TopSlider">
        <img src={require('../images/LeftButton.png')} onClick={previousTopSlide} alt="왼쪽" className="LeftButton" /> 
        <img src={topClothes[currentTopIndex]} alt="상의 이미지" />
        <img src={require('../images/RightButton.png')} onClick={nextTopSlide} alt="오른쪽" className="RightButton" /> 
      </div>

      {/* 하의 이미지 */}
      <div className="LongSkirt"></div>
      <div className="Slacks"></div>
      <div className="JoggerPants"></div>
      <div className="CargoPants"></div>
    </div>
  );
};

export default ChangeCloth;
