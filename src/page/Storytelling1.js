import React from 'react'
import '../css/Storytelling1.css';
import { useLocation, useNavigate } from 'react-router-dom/dist'
import { useState } from 'react';
import { useEffect } from 'react';

function Storytelling1() {
    const navigate = useNavigate();
    const location = useLocation();
    const place = location.state.value;

    const tokyo_lines = [
        "오늘은 도쿄의 메이지 신궁에 갈거야!",
        "유일본의 역서가 담긴 곳인 만큼 전통적인 옷을 입으면 좋을 것 같네~",
        "무슨 옷을 입어볼까?"
    ]

    const osaka_lines = [
        "오늘은 오사카 도톤보리의 글리코상을 보러 갈거야!",
        "유행하는 패션들이 가득한 곳이고,여러 놀거리가 많다고 하니 편하면서 트렌디한 느낌을 입고 싶어!",
        "무슨 옷을 입어볼까?"
    ]

    const sapporo_lines = [
        "오늘은 삿포로의 오도리 공원 얼음축제에 갈거야!",
        "추운 곳으로 가니까 따뜻하고 귀엽게 입으면 좋을 것 같아!",
        "무슨 옷을 입어볼까?"
    ]

    const [line, setLine] = useState(0);
    const [displayText, setDisplayText] = useState(""); // 화면에 보여지는 텍스트

    const changeLine = () => {
        setLine(line+1);
        if(line == 2) navigate('/ChangeCloth');
    }
    const pl = place === 'tokyo' ? tokyo_lines[line] : place === 'osaka' ? osaka_lines[line] : sapporo_lines[line];
    console.log(pl);

    // useEffect(() => {
    //     let currentIndex = 0; // 현재 글자의 인덱스
    
    //     const typingInterval = setInterval(() => {
    //       if (currentIndex < pl.length) {
    //         setDisplayText(prevText => prevText + pl[currentIndex]); // 한 글자씩 추가
    //         currentIndex++;
    //       } else {
    //         clearInterval(typingInterval); // 모든 글자를 타이핑한 경우 인터벌 종료
    //       }
    //     }, 100); // 한 글자가 추가되는 간격
    
    //     return () => {
    //       clearInterval(typingInterval); // 컴포넌트 언마운트 시 인터벌 정리
    //     };
    //   }, []);

  return (
    <div>
      <div className='main'>
        <img className='character' src={`/images/character.png`} alt=''></img>
        <img className='closet' src={`/images/closet-close.png`} alt=''></img>
        <div>
            <img className='textbox' src={`/images/textbox.png`} alt=''></img>
            <div className='line'>{pl}</div>
            <img className='nextbtn' src={`/images/storybtn.png`} alt=''onClick={changeLine}></img>
        </div>
        
      </div>
    </div>
  )
}

export default Storytelling1
