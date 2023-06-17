import React, { useEffect } from 'react';
import { useState } from 'react';
import '../css/ChangeAccessories.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const ChangeAccessories = () => {
  
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

  const topIndex = topClothesName.findIndex(item => item === value.top);
  const bottomIndex = bottomClothesName.findIndex(item => item === value.bottom);
  const setIndex = setClothesName.findIndex(item => item === value.set);

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
      </div>
    </div>
  )
}

export default ChangeAccessories
