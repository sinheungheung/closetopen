import React, { useState, useEffect } from "react";
import "../css/Collection.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Collection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const place = location.state.value;
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState(0);
  const [boxCount, setBoxCount] = useState(3); // 첫 시작화면에 CollectBox 3개 보여주기
  const [value, setValues] = useState([]);

  useEffect(() => {
    async function getAll() {
      try {
        const res = await axios.get('getall')
        setValues(res.data);
        setBoxCount(3);
      } catch (err) {
        console.log(err);
      }
    };
    getAll();
  }, []);


  const topClothesName = ['top-c.png', 'tshirt-c.png', 'knit-c.png', 'windbreaker-c.png', 'shirt-c.png', 'cardigan-c.png', 'blouse-c.png'];
  const bottomClothesName = ['bottom.png', 'longskirt.png', 'slacks.png', 'joggerpants.png', 'cargopants.png', 'jeans.png', 'shortskirt.png'];
  const setClothesName = ["", 'onepiece-c.png', 'coat-c.png', 'kimono-c.png'];
  const accessorieClothesName = ['hat1-c.png', 'hat2-c.png', 'flower-c.png', 'glasses-c.png', 'headset-c.png', 'rebbon-c.png'];
  const shoesClothesName = ['shoes1.png', 'shoes2.png', 'shoes3.png', 'shoes4.png', 'shoes5.png', 'shoes6.png'];

  // 옷 위치 지정
  const Toplocation = ["27%", "26%", "27%", "29%", "28%", "29.5%", "27%", "27%"]
  const Bottomlocation = ["24%", "11.3%", "6.5%", "7%", "8.8%", "8.8%", "23%"] //2
  const bottomLeftlocation = ["33.5%", "42.1%", "42.3%", "42%", "35%", "35%", "34%"] //9
  const setLocation = ["29.3%","29.5%","29.3%","29.3%"]
  // 악세사리 위치 지정
  const accessorieTopLocation = ["4%", "1%", "8%", "4%", "1%", "4%", "4%", "4%"]
  const accessorieLeftLocation = ["31%", "31%", "30.5%", "30.7%", "32%", "43%"]
  // 신발 위치 지정
  const shoesTopLocation = ["78%", "78.5%", "78%", "79%", "78%", "78.5%"]

  // X를 누르면 /Storytelling2페이지로 이동
  function handleClick() {
    navigate("/secondstorytelling", { state: { value: place } });
  }

  function handleLeftClick() {
    setPosition((prevPosition) => prevPosition - 1400);
  }

  function handleRightClick() {
    if(value.length > 0){
      setPosition((prevPosition) => prevPosition + 1400);
      setBoxCount((prevCount) => prevCount + 1);
    }
  }

  const generateCollectBoxes = () => {
    if (value.length > 0) {
      const boxes = [];
      console.log(value[0].top)
      for (let i = 0; i < value.length; i++) {
        
        // 베열에서 db에서 받은 값의 인덱스 찾기
        const topIndex = topClothesName.findIndex(item => item === value[i].top);
        const bottomIndex = bottomClothesName.findIndex(item => item === value[i].bottom);
        const setIndex = setClothesName.findIndex(item => item === value[i].set);
        const accessorieIndex = accessorieClothesName.findIndex(item => item === value[i].accessorie);
        const shoesIndex = shoesClothesName.findIndex(item => item === value[0].shoes);
       
        const leftPosition = 300 + (i - Math.floor(position / 1400)) * 1550;
        boxes.push(
          <div
            className={`CollectBox CollectBox${i + 1}`}
            key={i + 1}
            style={{ transform: `translateX(${position}px)`, left: `${leftPosition}px` }}
          >

            {/* 캐릭터 */}
            <div className="CharacterScreen">
              <img className="character-co" src={`/images/character.png`} alt="" />
                <img
                style={{ position: 'absolute', top: Toplocation[topIndex] }}
                src={`/images/cloths/${value[i].top}`}
                alt="상의 이미지"
                className='top-co'
              />
                <img
                style={{ position: 'absolute', left: bottomLeftlocation[bottomIndex], bottom: Bottomlocation[bottomIndex] }}
                src={`/images/cloths/${value[i].bottom}`}
                alt="하의 이미지"
                className='bottom-co'
                />
            
              {(value[i].set) !== "" &&(
                <img style={{ position: 'absolute', top: setLocation[setIndex] }}
                src={`/images/cloths/${value[i].set}`}
                alt="세트 이미지"
                className='set-co'
                />
              )}
              
              {(value[i].accessorie) !== "" &&(
              <img style={{ position: 'absolute', top: accessorieTopLocation[accessorieIndex], left: accessorieLeftLocation[accessorieIndex] }}
                src={`/images/cloths/${value[i].accessorie}`}
                alt="악세사리"
                className='accessorie-co'
              />
              )}

              {(value[i].shoes) !== "" &&(
              <img style={{ position: 'absolute', top: shoesTopLocation[shoesIndex] }}
                src={`/images/cloths/${value[i].shoes}`}
                alt="신발"
                className='shoes-co'
              />
              )}
            </div>
          </div>
        );
      }
      return boxes;
    }
  };


  return (
    <div className="main">
      <div className="collection">
        <div className="CloseButton" onClick={handleClick}></div>
        {generateCollectBoxes()}
        <div className="CollectLeft" onClick={handleLeftClick}></div>
        <div className="CollectRight" onClick={handleRightClick}></div>
      </div>
    </div>
  );
};

export default Collection;
