import React, { useEffect } from 'react';
import { useState } from 'react';
import '../css/ChangeAccessories.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

const ChangeAccessories = () => {
  const movePage = useNavigate();
  const location = useLocation();
  const place = location.state.value;

  const [value, setValues] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/getcloths')
    .then(res => {
      setValues(res.data[0]);
    })
    .catch(err => console.log(err))
  }, [])

  console.log(value);

  const topClothesName = ['top-c.png', 'tshirt-c.png', 'knit-c.png', 'windbreaker-c.png', 'shirt-c.png', 'cardigan-c.png', 'blouse-c.png'];
  const bottomClothesName = ['bottom.png', 'longskirt.png', 'slacks.png', 'joggerpants.png', 'cargopants.png', 'jeans.png', 'shortskirt.png'];
  const setClothesName = ["", 'onepiece.png', 'coat.png', 'kimono.png'];

  // 옷 위치 지정
  const Toplocation = ["27%","26%","27%","29%","28%","29.5%","27%","27%"]
  const Bottomlocation = ["22%","11.3%","6.5%","7%","7%","6.5%","21%"]
  const bottomLeftlocation = ["13%","13.1%","13.3%","13%","13.3%","13.3%","13%"]
  const setlocation = ["29.5%","29.5%","19%"]

  // 베열에서 db에서 받은 값의 인덱스 찾기
  const topIndex = topClothesName.findIndex(item => item === value.top);
  const bottomIndex = bottomClothesName.findIndex(item => item === value.bottom);
  const setIndex = setClothesName.findIndex(item => item === value.set);

  const accessories = ['/images/cloths/hat1.png', '/images/cloths/hat2.png', '/images/cloths/flower.png', '/images/cloths/glasses.png', '/images/cloths/headset.png', '/images/cloths/rebbon.png'];
  const accessories_c = ['/images/cloths/hat1-c.png', '/images/cloths/hat2-c.png', '/images/cloths/flower-c.png', '/images/cloths/glasses-c.png', '/images/cloths/headset-c.png', '/images/cloths/rebbon-c.png'];
  const shoeses = ['/images/cloths/shoes1.png', '/images/cloths/shoes2.png', '/images/cloths/shoes3.png', '/images/cloths/shoes4.png', '/images/cloths/shoes5.png', '/images/cloths/shoes6.png'];

  const [currentAccessorieIndex, setCurrenttAccessorieIndex] = useState(0);
  const [currentShoesIndex, setCurrentShoesIndex] = useState(0);
  const [characterAccessorie, setCharacterAccessorie] = useState(0);
  const [characterShoes, setCharacterShoes] = useState(0);

  const nextAccessorieSlide = () => {
    const lastIndex1 = accessories.length - 1;
    const index1 = currentAccessorieIndex === 0 ? lastIndex1 : currentAccessorieIndex - 1;
    setCurrenttAccessorieIndex(index1);
  };
  const previousAccessorieSlide = () => {
    const lastIndex1 = accessories.length - 1;
    const index1 = currentAccessorieIndex === lastIndex1 ? 0 : currentAccessorieIndex + 1;
    setCurrenttAccessorieIndex(index1);
  };

  const lastIndex1 = shoeses.length - 1;
  
  const nextShoesSlide = () => {
    const index1 = currentShoesIndex === 0 ? lastIndex1 : currentShoesIndex - 1;
    setCurrentShoesIndex(index1);
  };
  const previousShoesSlide = () => {
    const index1 = currentShoesIndex === lastIndex1 ? 0 : currentShoesIndex + 1;
    setCurrentShoesIndex(index1);
  };

  const clickAccessorieHandler = (src) => {
    const index = accessories.findIndex(item => item === src);
    setCharacterAccessorie(index);
  };

  const clickShoesHandler = (src) => {
    const index = shoeses.findIndex(item => item === src);
    setCharacterShoes(index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id:value.id,
      accessorie:accessories_c[characterAccessorie],
      shoes:shoeses[characterShoes]
    }
    axios.post('http://localhost:5000/game/accessorie', data)
    .then(res => {
      console.log(res);
      if (res.data.Status === "Success") {
        movePage('/secondstorytelling', { state : { value : place}});
      } else {
        alert("Error");
      }
    })
    .catch(err => console.log(err))
  }

  // 악세사리 위치 지정
  const accessorieTopLocation = ["4%","1%","8%","4%","1%","4%","4%","4%"]
  const accessorieLeftLocation = ["12%","12%","11.5%","11.7%","13%","17%"]
  // 신발 위치 지정
  const shoesTopLocation = ["78%","78.5%","78%","79%","78%","78.5%"]

  return (
    <div className="MainGame">
      <img className = "closet-a" src='/images/closet-open2.png'/>
      <div className="CharacterScreen">
        <img className="character" src={`/images/character.png`} alt="" />
        <img
          style={{ position: 'absolute', top: Toplocation[topIndex]}}
          src={`/images/cloths/${value.top}`}
          alt="상의 이미지"
          className='top-a'
      />
        <img
          style={{ position: 'absolute', left:bottomLeftlocation[bottomIndex], bottom:Bottomlocation[bottomIndex]}}
          src={`/images/cloths/${value.bottom}`}
          alt="하의 이미지"
          className='bottom-a'
        />
        <img style={{ position: 'absolute', top: setlocation[setIndex]}} 
          src={`/images/cloths/${value.set}`}
          alt="세트 이미지" 
          className='set-a'
        />
        <img style={{ position: 'absolute', top:accessorieTopLocation[characterAccessorie], left:accessorieLeftLocation[characterAccessorie]}} 
          src={accessories_c[characterAccessorie]}
          alt="악세사리" 
          className='accessorie-c'
        />
        <img style={{ position: 'absolute', top:shoesTopLocation[characterShoes]}} 
          src={shoeses[characterShoes]}
          alt="신발" 
          className='shoes-c'
        />
      </div>

      <img src={require('../images/LeftButton.png')} onClick={previousAccessorieSlide} className="accessorieLeftButton" />
      <img src={accessories[currentAccessorieIndex]} style={{left:'51%'}} onClick={() => clickAccessorieHandler(accessories[currentAccessorieIndex])} className="accessorie"/> 
      <img src={accessories[currentAccessorieIndex+1]} style={{left:'62%'}} onClick={() => clickAccessorieHandler(accessories[currentAccessorieIndex+1])} className="accessorie"/> 
      <img src={accessories[currentAccessorieIndex+2]} style={{left:'73%'}} onClick={() => clickAccessorieHandler(accessories[currentAccessorieIndex+2])} className="accessorie"/> 
      <img src={require('../images/RightButton.png')} onClick={nextAccessorieSlide} className="accessorieRightButton" />

      <img src={require('../images/LeftButton.png')} onClick={previousShoesSlide} className="shoesLeftButton" />
      <img src={shoeses[currentShoesIndex]} style={{left:'50.5%'}} onClick={() => clickShoesHandler(shoeses[currentShoesIndex])} className="shoes"/> 
      <img src={shoeses[currentShoesIndex+1]} style={{left:'61.5%'}} onClick={() => clickShoesHandler(shoeses[currentShoesIndex+1])} className="shoes"/> 
      <img src={shoeses[currentShoesIndex+2]} style={{left:'72.5%'}} onClick={() => clickShoesHandler(shoeses[currentShoesIndex+2])} className="shoes"/> 
      <img src={require('../images/RightButton.png')} onClick={nextShoesSlide} className="shoesRightButton" />
    
      <img className="complete-btn" src={`/images/complete.png`} alt="" onClick={handleSubmit}/> 

    </div>
  )
}

export default ChangeAccessories
