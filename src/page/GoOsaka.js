import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

// const GoOsaka = () => {
// const movePage = useNavigate();

// function goGameStart(){
//   movePage('/GameStart');
// }
// return (
//   <div className="goosaka" >
//     <div className='CheckOsaka' onClick={goGameStart}></div>

//   <div class="OSAKA-image">
//     <div id="OSAKA" style="display:none; position:absolute; top:0px; left:0px; z-index:2"> </div>
// </div>
//   </div>
//   )
// }


// export default GoOsaka;


const GoOsaka = () => {
  const movePage = useNavigate();

  function goGameStart() {
    movePage('/GameStart');
  }

  return (
    <div class="parent">
      <div className="CheckOsaka" onClick={goGameStart}></div>
      <div class="OSAKA"></div>
      </div>

  );
};

export default GoOsaka;
