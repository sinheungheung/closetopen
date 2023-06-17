import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Storytelling1.css';

function Storytelling1() {
  const navigate = useNavigate();
  const location = useLocation();
  const place = location.state.value;

  const tokyo_lines = [
    '오늘은 도쿄의 메이지 신궁에 갈거야!\n',
    '일본의 역사가 담긴 곳인 만큼 전통적인 옷을 입으면 좋을 것 같네~\n',
    '무슨 옷을 입어볼까?',
  ];

  const osaka_lines = [
    '오늘은 오사카 도톤보리의 글리코상을 보러 갈거야!\n',
    '유행하는 패션들이 가득한 곳이고, 여러 놀거리가 많다고 하니 편하면서 트렌디한 느낌을 입고 싶어!\n',
    '무슨 옷을 입어볼까?',
  ];

  const sapporo_lines = [
    '오늘은 삿포로의 오도리 공원 얼음축제에 갈거야!\n',
    '추운 곳으로 가니까 따뜻하고 귀엽게 입으면 좋을 것 같아!\n',
    '무슨 옷을 입어볼까?',
  ];

  const [line, setLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const changeLine = () => {
    if (line < 2) {
      setLine(line + 1);
      setDisplayText('');
      setButtonDisabled(true);
    } else {
      navigate('/ChangeCloth', { state : { value : place}}); 
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
          setButtonDisabled(false);
        }
      }, 100);
    };

    startTyping();

    return () => {
      clearInterval(intervalId);
    };
  }, [pl]);

  return (
    <div>
      <div className="main">
        <img className="character" src={`/images/character.png`} alt="" />
        <img className="closet" src={`/images/closet-close.png`} alt="" />
        <div>
          <img className="textbox" src={`/images/textbox.png`} alt="" />
          <div className="line">{displayText}</div>
          <img
            className="nextbtn"
            src={`/images/storybtn.png`}
            alt=""
            onClick={changeLine}
            disabled={buttonDisabled}
          />
        </div>
      </div>
    </div>
  );
}

export default Storytelling1;
