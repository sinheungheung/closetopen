import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const GoSapporo = () => {
const movePage = useNavigate();

function goGameStart(){
  movePage('/GameStart');
}

return (
  <div className="gosapporo" >
    <div className='CheckSapporo' onClick={goGameStart}></div>
  </div>
  )
}
export default GoSapporo;



