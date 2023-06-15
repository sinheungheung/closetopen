import React, { useEffect } from 'react';
import { useState } from 'react';
import '../css/ChangeCloth.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// // 빈 이미지
import Empty from '../images/Empty.png';
import EmptyTop from '../images/EmptyTop.png'; //상의 초기화
import EmptyBottom from '../images/EmptyBottom.png'; //하의 초기화

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
import Tteokbokkicoat from '../images/Tteokbokkicoat-Empty.png';
import Kimono from '../images/Kimono-Empty.png';

const ChangeCloth = () => {
  const movePage = useNavigate();

  const topClothes = [EmptyTop, ShortTshirt, Knit, WindBreaker, Short, Cardigan, Blouse];
  const bottomClothes = [EmptyBottom, LongSkirt, Slacks, JoggerPants, CargoPants, Jeans, Skirt];
  const setClothes = [Empty, Onepiece, Tteokbokkicoat, Kimono];

  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  const [currentBottomIndex, setCurrentBottomIndex] = useState(0);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  
  const [values, setValues] = useState({
    top: ''
    // top: '',
    // bottom: '',
    // set: ''
  });

   // 상의 이미지 변경 시 values에 추가하는 함수
   const updateTopImage = () => {
    setValues(prev => ({
      ...prev,
      top: topClothes[currentTopIndex]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      top: topClothes[currentTopIndex]
    };
    console.log("이거다 ", data.top);
    axios.post('http://localhost:5000/game', data)
      .then(res => {
        console.log(res);
        if (res.data.Status === "Success") {
          movePage('/ChangeAccessories');
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err))
  }

  const previousTopSlide = () => {
    const lastIndex1 = topClothes.length - 1;
    const index1 = currentTopIndex === 0 ? lastIndex1 : currentTopIndex - 1;
    setCurrentTopIndex(index1);
  };
  const previousBottomSlide = () => {
    const lastIndex2 = bottomClothes.length - 1;
    const index2 = currentBottomIndex === 0 ? lastIndex2 : currentBottomIndex - 1;
    setCurrentBottomIndex(index2);
    // setValues(prev => ({...prev, [values.bottom] : [bottomClothes[currentBottomIndex]]}));
  };
  const previousSetSlide = () => {
    const lastIndex3 = setClothes.length - 1;
    const index3 = currentSetIndex === 0 ? lastIndex3 : currentSetIndex - 1;
    setCurrentSetIndex(index3);
    // setValues(prev => ({...prev, [values.set] : [setClothes[currentSetIndex]]}));
  };

  const nextTopSlide = () => {
    const lastIndex1 = topClothes.length - 1;
    const index1 = currentTopIndex === lastIndex1 ? 0 : currentTopIndex + 1;
    setCurrentTopIndex(index1);
  };
  const nextBottomSlide = () => {
    const lastIndex2 = bottomClothes.length - 1;
    const index2 = currentBottomIndex === lastIndex2 ? 0 : currentBottomIndex + 1;
    setCurrentBottomIndex(index2);
  };
  const nextSetSlide = () => {
    const lastIndex3 = setClothes.length - 1;
    const index3 = currentSetIndex === lastIndex3 ? 0 : currentSetIndex + 1;
    setCurrentSetIndex(index3);
  };

  // 캐릭터 이미지 위치와 크기 수정하기
  const characterStyle = {
    position: 'relative',
    width: 800,
    height: 650,
    left: -100,
    top: -30
  };

  const Toplocation = [
    -27,-27,-27,-27,-27,-27,-27
  ]
  // (왼쪽버튼 순서) 1번째: 기본 티 2번째: ShortTshirt

  const Bottomlocation = [
    -20,-20,-20,-20,-20,-65,-20
    // 1번째: 기본 바지 2번째: LongSkirt
  ]

  useEffect(() => {
    console.log(values.top);
    updateTopImage();  // useEffect에서 이미지 정보를 업데이트하도록 추가
  }, [currentTopIndex]); 

  return (
    <div className="MainGame">
      <div className="OpenCloset"></div>
      <div className="CharacterScreen">
        <img style={characterStyle} src="/static/media/Character.7095c84f89cd85df496c.png" />
        <img
          style={{ position: 'absolute', left: -122, top: Toplocation[currentTopIndex], width: 850}}
          src={!currentSetIndex ? topClothes[currentTopIndex] : EmptyTop}
          alt="상의 이미지"
      />
        <img
          style={{ position: 'absolute', left: -132, bottom: Bottomlocation[currentBottomIndex], width: 870 }}
          src={!currentSetIndex ? bottomClothes[currentBottomIndex] : EmptyBottom}
          alt="하의 이미지"
        />
        <img style={{ position: 'absolute', left: -122, top: -26, width: 850 }} src={setClothes[currentSetIndex]} alt="세트 이미지" />
      </div>

      {/* 상의 이미지 */}
      <div className="TopSlider">
        <>
          <img src={require('../images/LeftButton.png')} onClick={previousTopSlide} alt="왼쪽" className="LeftButton" />
          <img src={topClothes[currentTopIndex]} alt="상의 이미지" />
          <img src={require('../images/RightButton.png')} onClick={nextTopSlide} alt="오른쪽" className="RightButton" />
        </>
      </div>

      {/* 하의 이미지 */}
      <div className="BottomSlider">
        <>
          <img src={require('../images/LeftButton.png')} onClick={previousBottomSlide} alt="왼쪽" className="LeftButton" />
          <img src={bottomClothes[currentBottomIndex]} alt="하의 이미지" />
          <img src={require('../images/RightButton.png')} onClick={nextBottomSlide} alt="오른쪽" className="RightButton" />
        </>
      </div>

      {/* 세트 이미지 */}
      <div className="SetSlider">
        <img src={require('../images/LeftButton.png')} onClick={previousSetSlide} alt="왼쪽" className="LeftButton" />
        {!currentSetIndex && <img src={setClothes[currentSetIndex]} alt="세트 이미지" />}
        <img src={require('../images/RightButton.png')} onClick={nextSetSlide} alt="오른쪽" className="RightButton" />
      </div>
      <div className="NextBtn_Up" onClick={handleSubmit}></div>
    </div>
  );
};

export default ChangeCloth;
