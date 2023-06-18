import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Storytelling2.css';

function Storytelling2() {
  const navigate = useNavigate();
  const location = useLocation();
  const place = location.state && location.state.value;

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
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const changeLine = () => {
    if (line < 4) {
      setLine(line + 1);
      setDisplayText('');
      setButtonDisabled(true);
    } else {
      // navigate('/');
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
    <div className="main2">
      {place === 'tokyo' && <img className="TokyoStory2" src={'../images/TokyoStory2.png'} alt="" />} 
      {place === 'osaka' && <img className="OsakaStory2" src={'../images/OsakaStory2.png'} alt="" />} 
      {place === 'sapporo' && <img className="SapporoStory2" src={'../images/SapporoStory2.png'} alt="" />} 
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

export default Storytelling2;
