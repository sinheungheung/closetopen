import React, { useState } from 'react';
import '../css/ChangeCloth.css';
import { useNavigate } from 'react-router-dom';



// 상의 이미지
import ShortTshirt from '../images/ShortTshirt-Empty.png';
import Knit from '../images/Knit-Empty.png';
import WindBreaker from '../images/WindBreaker-Empty.png';
import Short from '../images/Short-Empty.png';
import Cardigan from '../images/Cardigan-Empty.png';
import Blouse from '../images/Blouse-Empty.png';

// 하의 이미지
import LongSkirt from '../images/LongSkirt.png';
import Slacks from '../images/Slacks.png';
import JoggerPants from '../images/JoggerPants.png';
import CargoPants from '../images/CargoPants.png';
import Jeans from '../images/Jeans.png';
import Skirt from '../images/Skirt.png';

// 세트 이미지
import Onepiece from '../images/Onepiece-Empty.png';
import Tteokbokkicoat  from '../images/Tteokbokkicoat-Empty.png';
import Kimono from '../images/Kimono-Empty.png';

const ChangeCloth = () => {
  const movePage = useNavigate();


  const topClothes = [ShortTshirt, Knit, WindBreaker, Short, Cardigan, Blouse];
  const bottomClothes = [LongSkirt, Slacks, JoggerPants, CargoPants, Jeans, Skirt];
  const setClothes =[Onepiece, Tteokbokkicoat, Kimono];

  const [currentTopIndex, setCurrentTopIndex] = useState(0);

  const previousTopSlide = () => {
    const lastIndex1 = topClothes.length - 1;
    const lastIndex2 = bottomClothes.length - 1;
    const lastIndex3 = bottomClothes.length - 1;
    const index1 = currentTopIndex === 0 ? lastIndex1 : currentTopIndex - 1;
    const index2 = currentTopIndex === 0 ? lastIndex2 : currentTopIndex - 1;
    const index3 = currentTopIndex === 0 ? lastIndex3 : currentTopIndex - 1;
    setCurrentTopIndex(index1);
    setCurrentTopIndex(index2);
    setCurrentTopIndex(index3);
  };

  const nextTopSlide = () => {
    const lastIndex1 = topClothes.length - 1;
    const lastIndex2 = topClothes.length - 1;
    const lastIndex3 = topClothes.length - 1;
    const index1 = currentTopIndex === lastIndex1 ? 0 : currentTopIndex + 1;
    const index2 = currentTopIndex === lastIndex2 ? 0 : currentTopIndex + 1;
    const index3 = currentTopIndex === lastIndex3 ? 0 : currentTopIndex + 1;
    setCurrentTopIndex(index1);
    setCurrentTopIndex(index2);
    setCurrentTopIndex(index3);
  };

  return (

    <div className="MainGame">
    <div className="OpenCloset"></div>
    <div className="CharacterScreen">
      <img style={{ position: "absolute", width: 500 }} src="/static/media/Character.7095c84f89cd85df496c.png" />
      <img style={{ position: "absolute", left: 23, top: 14, width: 453 }} src={topClothes[currentTopIndex]} />
      <img style={{ position: "absolute", left: 3, top: 13, width: 493 }} src={bottomClothes[currentTopIndex]} />
    </div>

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


      {/* 세트 이미지 */}
      <div className="TopSlider">
        <img src={require('../images/LeftButton.png')} onClick={previousTopSlide} alt="왼쪽" className="LeftButton" /> 
        <img src={setClothes[currentTopIndex]} alt="세트 이미지" />
        <img src={require('../images/RightButton.png')} onClick={nextTopSlide} alt="오른쪽" className="RightButton" /> 
      </div>
      </div>
  );
};

export default ChangeCloth;