import React, { useState } from 'react';
import '../css/ChangeCloth.css';
import { useNavigate } from 'react-router-dom';

const ChangeCloth = () => {
  const movePage = useNavigate();
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const handleDragStart = (event, itemId) => {
    event.dataTransfer.setData('itemId', itemId);
  };
  // 드래그 시작 시 호출되는 이벤트 핸들러
  // ID는 드롭 이벤트에서 해당 요소를 식별하는 데 사용함

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  // 드래그 중인 요소가 적절한 드롭 대상 위로 들어갔을 때 호출됨
  // 드롭 허용하도록 설정

  const handleDrop = (event) => {
    event.preventDefault();
    // 기본 동작을 방지함
    const itemId = event.dataTransfer.getData('itemId');
    // 드래그된 요소의 ID를 가져오고 요소를 찾음
    const item = document.getElementById(itemId);
    event.target.appendChild(item);
    // 요소를 드롭 대상에 추가함
  };

  return (
    <div className="MainGame">
      <div className="OpenCloset"></div>
      <div className="Character"></div>
      {/* 상의 이미지 */}
      <div className="ShortTshirt-Empty" draggable="true" onDragStart={(event) => handleDragStart(event, 'shortTshirt')}></div>
      <div className="Knit-Empty" draggable="true" onDragStart={(event) => handleDragStart(event, 'knit')}></div>
      <div className="WindBreaker-Empty" draggable="true" onDragStart={(event) => handleDragStart(event, 'windBreaker')}></div>
      <div className="Short-Empty" draggable="true" onDragStart={(event) => handleDragStart(event, 'short')}></div>
      {/* 하의 이미지 */}
      <div className="LongSkirt" draggable="true" onDragStart={(event) => handleDragStart(event, 'longSkirt')}></div>
      <div className="Slacks" draggable="true" onDragStart={(event) => handleDragStart(event, 'slacks')}></div>
      <div className="JoggerPants" draggable="true" onDragStart={(event) => handleDragStart(event, 'joggerPants')}></div>
      <div className="CargoPants" draggable="true" onDragStart={(event) => handleDragStart(event, 'cargoPants')}></div>

      {/* 캐릭터 영역 */}
      <div className="CharacterArea" onDragOver={handleDragOver} onDrop={handleDrop}></div>
    </div>
  );
};

export default ChangeCloth;