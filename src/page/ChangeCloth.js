import React, { useEffect } from 'react';
import { useState } from 'react';
import '../css/ChangeCloth.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

const ChangeCloth = () => {
  const movePage = useNavigate();
  const location = useLocation();
  const place = location.state.value;

  // 상의 이미지
  const EmptyTop = ['/images/cloths/top.png', '/images/cloths/top-c.png'];
  const ShortTshirt = ['/images/cloths/tshirt.png', '/images/cloths/tshirt-c.png'];
  const Knit = ['/images/cloths/tshirt.png', '/images/cloths/tshirt-c.png'];
  const WindBreaker = ['/images/cloths/windbreaker.png', '/images/cloths/windbreaker-c.png'];
  const Shirt = ['/images/cloths/shirt.png', '/images/cloths/shirt-c.png'];
  const Cardigan = ['/images/cloths/cardigan.png', '/images/cloths/cardigan-c.png'];
  const Blouse = ['/images/cloths/blouse.png', '/images/cloths/blouse-c.png'];
  const topClothes = [EmptyTop[0], ShortTshirt[0], Knit[0], WindBreaker[0], Shirt[0], Cardigan[0], Blouse[0]];
  const topClothes_c = [EmptyTop[1], ShortTshirt[1], Knit[1], WindBreaker[1], Shirt[1], Cardigan[1], Blouse[1]];
  const topClothes_db = ['top-c.png', 'tshirt-c.png', 'knit-c.png', 'windbreaker-c.png', 'shirt-c.png', 'cardigan-c.png', 'blouse-c.png'];


  // 하의 이미지
  const EmptyBottom = '../images/cloths/bottom.png'; 
  const LongSkirt = '/images/cloths/longskirt.png';
  const Slacks = '/images/cloths/slacks.png';
  const JoggerPants = '/images/cloths/joggerpants.png';
  const CargoPants = '/images/cloths/cargopants.png';
  const Jeans = '/images/cloths/jeans.png';
  const Skirt = '/images/cloths/shortskirt.png';
  const bottomClothes = [EmptyBottom, LongSkirt, Slacks, JoggerPants, CargoPants, Jeans, Skirt];
  const bottomClothes_db = ['bottom.png', 'longskirt.png', 'slacks.png', 'joggerpants.png', 'cargopants.png', 'jeans.png', 'shortskirt.png'];

  // 세트 이미지
  const Onepiece = '/images/cloths/onepiece.png';
  const Tteokbokkicoat = '/images/cloths/coat.png';
  const Kimono = '/images/cloths/kimono.png';
  const setClothes = ["", Onepiece, Tteokbokkicoat, Kimono];
  const setClothes_db = ["", 'onepiece.png', 'coat.png', 'kimono.png'];

  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  const [currentBottomIndex, setCurrentBottomIndex] = useState(0);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      top: topClothes_db[currentTopIndex],
      bottom: bottomClothes_db[currentBottomIndex],
      set: setClothes_db[currentSetIndex]
    };
    console.log(data);
    axios.post('http://localhost:5000/game/cloth', data)
      .then(res => {
        console.log(res);
        if (res.data.Status === "Success") {
          movePage('/ChangeAccessories', { state : { value : place}});
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

  // 옷 위치 지정
  const Toplocation = ["27%","26%","27%","29%","28%","29.5%","27%","27%"]
  const Bottomlocation = ["22%","11.3%","6.5%","7%","7%","6.5%","21%"]
  const bottomLeftlocation = ["13%","13.1%","13.3%","13%","13.3%","13.3%","13%"]
  const Setlocation = ["29.5%","29.5%","19%"]

  return (
    <div className="MainGame">

      <img className = "closet-c" src='/images/closet-open.png'/>
      <div className="CharacterScreen">
        <img className="character" src={`/images/character.png`} alt="" />
        <img
          style={{ position: 'absolute', top: Toplocation[currentTopIndex]}}
          src={!currentSetIndex ? topClothes_c[currentTopIndex] : EmptyTop}
          alt="상의 이미지"
          className='top-c'
      />
        <img
          style={{ position: 'absolute',left:bottomLeftlocation[currentBottomIndex], bottom: Bottomlocation[(Bottomlocation==6) ?  currentBottomIndex: currentBottomIndex] }}
          src={!currentSetIndex ? bottomClothes[currentBottomIndex] : EmptyBottom}
          alt="하의 이미지"
          className='bottom-c'
        />
        <img style={{ position: 'absolute', top: Setlocation[currentTopIndex]}} 
        src={setClothes[currentSetIndex]} 
        alt="세트 이미지" 
        className='set-c'/>
      </div>

      {/* 상의 이미지 */}
      <img src={require('../images/LeftButton.png')} onClick={previousTopSlide} alt="왼쪽" className="topLeftButton" />
      <img src={topClothes[currentTopIndex]} alt="상의 이미지" className="top" /> {/*임시 이미지*/}
      <img src={require('../images/RightButton.png')} onClick={nextTopSlide} alt="오른쪽" className="topRightButton" />

      {/* 하의 이미지 */}
      <img src={require('../images/LeftButton.png')} onClick={previousBottomSlide} alt="왼쪽" className="bottomLeftButton" />
      <img src={bottomClothes[currentBottomIndex]} className="bottom" />
      <img src={require('../images/RightButton.png')} onClick={nextBottomSlide} alt="오른쪽" className="bottomRightButton" />

     {/* 세트 이미지 */}
      <img src={require('../images/LeftButton.png')} onClick={previousSetSlide} alt="왼쪽" className="setLeftButton" />
      <img src={setClothes[currentSetIndex]} className="set" />
      <img src={require('../images/RightButton.png')} onClick={nextSetSlide} alt="오른쪽" className="setRightButton" />
      
      <img className="next-btn" src={`/images/nextbtn.png`}alt="" onClick={handleSubmit}/> 

    </div>
  );
};

export default ChangeCloth;
