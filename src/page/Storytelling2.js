import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import '../css/Storytelling2.css';

function Storytelling2() {
  // 버튼을 누르면 화면 이동
  const navigate = useNavigate();
  const movePage = useNavigate();
  const location = useLocation();
  const place = location.state && location.state.value;

  const [value, setValues] = useState([]);
  // 사용자가 선택한 옷 정보 가져오기
  useEffect(() => {
    axios.get('http://localhost:5000/getcloths')
      .then(res => {
        console.log(res.data[0]);
        setValues(res.data[0]);
      })
      .catch(err => console.log(err))
  }, [])

  const topClothesName = ['top-c.png', 'tshirt-c.png', 'knit-c.png', 'windbreaker-c.png', 'shirt-c.png', 'cardigan-c.png', 'blouse-c.png'];
  const bottomClothesName = ['bottom.png', 'longskirt.png', 'slacks.png', 'joggerpants.png', 'cargopants.png', 'jeans.png', 'shortskirt.png'];
  const setClothesName = ["", 'onepiece-c.png', 'coat-c.png', 'kimono-c.png'];
  const accessorieClothesName = ['hat1-c.png', 'hat2-c.png', 'flower-c.png', 'glasses-c.png', 'headset-c.png', 'rebbon-c.png'];
  const shoesClothesName = ['shoes1.png', 'shoes2.png', 'shoes3.png', 'shoes4.png', 'shoes5.png', 'shoes6.png'];

  // 옷 위치 지정
  const Toplocation = ["27%","26%","27%","29%","28%","29.5%","27%","27%"]
  const Bottomlocation = ["22%","11.3%","6.5%","7%","7%","6.5%","21%"]
  const bottomLeftlocation = ["42%","42.1%","42.3%","42%","42.3%","42.3%","42%"]
  const setLocation = ["", "19.5%","29.5%","29%"]
  // 악세사리 위치 지정
  const accessorieTopLocation = ["4%","1%","8%","4%","1%","4%","4%","4%"]
  const accessorieLeftLocation = ["41%","41%","40.5%","40.7%","42%","46%"]
  // 신발 위치 지정
  const shoesTopLocation = ["78%","78.5%","78%","79%","78%","78.5%"]

  // 베열에서 db에서 받은 값의 인덱스 찾기
  const topIndex = topClothesName.findIndex(item => item === value.top);
  const bottomIndex = bottomClothesName.findIndex(item => item === value.bottom);
  const setIndex = setClothesName.findIndex(item => item === value.set);
  const accessorieIndex = accessorieClothesName.findIndex(item => item === value.accessorie);
  const shoesIndex = shoesClothesName.findIndex(item => item === value.shoes);
  
  const handleImageClick1 = () => {
    movePage('/Button');
  };

  function handleImageClick2() {
    navigate('/Collection', { state: { value: place } });
  }
  const tokyo_lines = [
    '옷을 골라줘서 고마워! 여기에 정말 잘 어울리는 옷인 것 같아~\n',
    '이 곳 메이지 신궁은 근대화에 큰 영향을 끼친 메이지 일왕 부부를 위해 세워진 신사라고 해.\n',
    '오호~ 신궁 근처의 은행나무들과 알록달록한 술통 앞에서 사진도 찍고 가야겠어!\n',
    '신궁 근처에 맛있는 스시집과 규카츠집, 우동집이 있다고 하니 거기도 가봐야겠어!\n',
    '구경하다보면 다리가 아플수도 있겠지? 그럼 근처에 있는 예쁜 카페에 들려서 쉬면 좋겠다~\n'
  ];

  const osaka_lines = [
    '옷을 골라줘서 고마워! 여기에 정말 잘 어울리는 옷인 것 같아~\n',
    '사실 글리코는 일본의 과자회사 마스코트지만 옥외광고가 도톤보리에 설치된 이후 오사카를 대표하는 상징이 되었대!\n',
    '글리코상 아래에 있는 다리 밑으로 내려가면, 건물로 들어가는 입구가 있대!\n',
    '그곳으로 올라가면 글리코상 포스터가 계속 이어지는 비밀 포토 스팟이 있다고 해.\n',
    '이 근처에는 유명한 타코야끼 맛집도 있고, 아름다운 거리도 있어서 산책을 하기에도 좋겠어!\n'
  ];

  const sapporo_lines = [
    '옷을 골라줘서 고마워! 여기에 정말 잘 어울리는 옷인 것 같아~\n',
    '이 곳 오도리 공원은 삿포로의 남과 북의 경계가 되고, 도로를 따라 동서로 길게 뻗어 있는 독특한 형태의 공원이라고 해.\n',
    '우와! 홋카이도 고등학교 문화연맹 이시카리지부 학생들이 만든 눈조각 제작 콘테스트도 열린대!\n',
    '일몰 후에는 눈조각을 조명으로 밝혀 행사장을 화려하게 장식한다니, 꼭 감상해야겠는 걸?\n',
    '이 근처에는 사진 찍기 좋은 시계탑도 있고, 맛있는 빵집도 있대! 꼭 가봐야겠어!\n'
  ];

  const [line, setLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [buttonVisible, setButtonVisible] = useState(true);

  const changeLine = () => {
    if (line < 4) {
      setLine(line + 1);
      setDisplayText('');
    } else {
      setButtonVisible(false);
    }
  };

  const pl =
    place === 'tokyo'
      ? tokyo_lines[line]
      : place === 'osaka'
        ? osaka_lines[line]
        : sapporo_lines[line];

  useEffect(() => {
    let currentIndex = 0;
    let intervalId = null;

    const startTyping = () => {
      intervalId = setInterval(() => {
        if (currentIndex < pl.length) {
          setDisplayText(pl.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 60); // 글자 타이핑 속도
    };

    startTyping();

    return () => {
      clearInterval(intervalId);
    };
  }, [pl]);

  return (
    <div>
      <div className="main2">
        {place === 'tokyo' && <img className="TokyoStory2" alt="" />}
        {place === 'osaka' && <img className="OsakaStory2" alt="" />}
        {place === 'sapporo' && <img className="SapporoStory2" alt="" />}

        {/* 캐릭터 */}
        <div className="CharacterScreen">
          <img className="character-s" src={`/images/character.png`} alt="" />
          
          <img
            style={{ position: 'absolute', top: Toplocation[topIndex] }}
            src={`/images/cloths/${value.top}`}
            alt="상의 이미지"
            className='top-s'
          />
          <img
            style={{ position: 'absolute', left: bottomLeftlocation[bottomIndex], bottom: Bottomlocation[bottomIndex] }}
            src={`/images/cloths/${value.bottom}`}
            alt="하의 이미지"
            className='bottom-s'
          />

          {(value.set) !== "" &&(
          <img style={{ position: 'absolute', top: setLocation[setIndex] }}
            src={`/images/cloths/${value.set}`}
            alt="세트 이미지"
            className='set-s'
          />
          )}
             
          {(value.accessorie) !== "" &&( 
          <img style={{ position: 'absolute', top: accessorieTopLocation[accessorieIndex], left: accessorieLeftLocation[accessorieIndex] }}
            src={`/images/cloths/${value.accessorie}`}
            alt="악세사리"
            className='accessorie-s'
          />
          )}

          {(value.shoes) !== "" &&(
          <img style={{ position: 'absolute', top:shoesTopLocation[shoesIndex]}}
            src={`/images/cloths/${value.shoes}`}
            alt="신발"
            className='shoes-s'
          />
          )}
        </div>

        <div>
          <img className="textbox" src={`/images/textbox.png`} alt="" />
          <div className="line">{displayText}</div>
          {buttonVisible && (
            <img
              className="nextbtn"
              src={`/images/storybtn.png`}
              alt=""
              onClick={changeLine}
            />
          )}
        </div>
      </div>
      <div className="HomeBtn" onClick={handleImageClick1}></div>
      <div className="GocollectionBtn" onClick={handleImageClick2}></div>
    </div>
  );
}

export default Storytelling2;
