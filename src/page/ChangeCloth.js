import React, { useState } from 'react';
import '../css/ChangeCloth.css';
import { useNavigate } from 'react-router-dom';


// 상의 이미지
import ShortTshirtEmpty from '../images/ShortTshirt-Empty.png';
import Knit from '../images/Knit-Empty.png';
import WindBreaker from '../images/WindBreaker-Empty.png';
import ShortEmpty from '../images/Short-Empty.png';
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

  // 드래그 기능
  const [ShortTshirtEmptyPosition, setShirtPosition] = useState({ x: 0, y: 0 });
  const [KnitPosition, setKnitPosition] = useState({ x: 0, y: 0 });
  const [WindBreakerPosition, setWindBreakerPosition] = useState({ x: 0, y: 0 });
// ---------------------------------------------------
  const handleDragStart = (event, item) => {
    // 드래그 시작 시 옷의 위치를 기록
    const { clientX, clientY } = event;
    const offsetX = clientX - event.target.offsetLeft;
    const offsetY = clientY - event.target.offsetTop;

    if (item === 'shirt') {
      setShirtPosition({ x: offsetX, y: offsetY });
    } else if (item === 'pants') {
      setPantsPosition({ x: offsetX, y: offsetY });
    }
  };

  const handleDrag = (event, item) => {
    // 드래그 중인 상태에서 옷의 위치를 업데이트
    const { clientX, clientY } = event;
    const offsetX = clientX - event.target.offsetLeft;
    const offsetY = clientY - event.target.offsetTop;

    if (item === 'ShortTshirt') {
      ShortTshirtEmptyPosition({ x: offsetX, y: offsetY });
    } else if (item === 'Knit') {
      KnitPosition({ x: offsetX, y: offsetY });
    }
  };
// -------------------------------------------------
  const topClothes = [ShortTshirtEmpty, Knit, WindBreaker, ShortEmpty, Cardigan, Blouse];
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
      <div className="Character"></div>

      {/* 상의 이미지 */}
      <div className="TopSlider">


        <img src={require('../images/LeftButton.png')} onClick={previousTopSlide} alt="왼쪽" className="LeftButton" /> 
        <img src={topClothes[currentTopIndex]} alt="상의 이미지" />
        <img src={require('../images/RightButton.png')} onClick={nextTopSlide} alt="오른쪽" className="RightButton" /> 
    
    
      {/* -------------------------------- */}
       
      <img
          src={ShirtImage}
          alt="Shirt"
          draggable="true"
          onDragStart={(event) => handleDragStart(event, 'shirt')}
          onDrag={(event) => handleDrag(event, 'shirt')}
          style={{ top: shirtPosition.y, left: shirtPosition.x }}
        />

        
     
       {/* -------------------------------- */}
    
    
      </div>

      {/* 하의 이미지 */}
      <div className="TopSlider">
        <img src={require('../images/LeftButton.png')} onClick={previousTopSlide} alt="왼쪽" className="LeftButton" /> 
        <img src={bottomClothes[currentTopIndex]} alt="하의 이미지" />
        <img src={require('../images/RightButton.png')} onClick={nextTopSlide} alt="오른쪽" className="RightButton" /> 
        {/* -------------------------------- */}
       
        <img
          src={PantsImage}
          alt="Pants"
          draggable="true"
          onDragStart={(event) => handleDragStart(event, 'pants')}
          onDrag={(event) => handleDrag(event, 'pants')}
          style={{ top: pantsPosition.y, left: pantsPosition.x }}
        />
     
       {/* -------------------------------- */}
      
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
