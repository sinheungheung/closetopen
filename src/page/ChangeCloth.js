import React, { useState } from 'react';
import '../css/ChangeCloth.css';
import { useNavigate } from 'react-router-dom';

// 상의 이미지
import ShortTshirtEmpty from '../images/ShortTshirt-Empty.png';
import Knit from '../images/Knit-Empty.png';
import WindBreaker from '../images/WindBreaker-Empty.png';
import ShortEmpty from '../images/Short-Empty.png';

// 하의 이미지
import LongSkirt from '../images/LongSkirt.png';
import Slacks from '../images/Slacks.png';
import JoggerPants from '../images/JoggerPants.png';
import CargoPants from '../images/CargoPants.png';

const ChangeCloth = () => {
  const movePage = useNavigate();

  const topClothes = [ShortTshirtEmpty, Knit, WindBreaker, ShortEmpty];
  const bottomClothes = [LongSkirt, Slacks, JoggerPants, CargoPants];

  const [currentTopIndex, setCurrentTopIndex] = useState(0);

  const previousTopSlide = () => {
    const lastIndex1 = topClothes.length - 1;
    const lastIndex2 = bottomClothes.length - 1;
    const index1 = currentTopIndex === 0 ? lastIndex1 : currentTopIndex - 1;
    const index2 = currentTopIndex === 0 ? lastIndex2 : currentTopIndex - 1;
    setCurrentTopIndex(index1);
    setCurrentTopIndex(index2);
  };

  const nextTopSlide = () => {
    const lastIndex1 = topClothes.length - 1;
    const lastIndex2 = topClothes.length - 1;
    const index1 = currentTopIndex === lastIndex1 ? 0 : currentTopIndex + 1;
    const index2 = currentTopIndex === lastIndex2 ? 0 : currentTopIndex + 1;
    setCurrentTopIndex(index1);
    setCurrentTopIndex(index2);
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
      <div className="TopSlider">
        <img src={require('../images/LeftButton.png')} onClick={previousTopSlide} alt="왼쪽" className="LeftButton" /> 
        <img src={bottomClothes[currentTopIndex]} alt="하의 이미지" />
        <img src={require('../images/RightButton.png')} onClick={nextTopSlide} alt="오른쪽" className="RightButton" /> 
      </div>
      </div>
  );
};

export default ChangeCloth;
