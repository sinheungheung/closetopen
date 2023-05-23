import React, { useState } from 'react'
import '../css/ChangeCloth.css';
import { useNavigate } from 'react-router-dom';

const ChangeCloth = () => {
const movePage = useNavigate();
const [hover, setHover] = useState(false);

// function (){
//   movePage('/');
// }
const handleMouseOver = () => {
  setHover(true);
};

const handleMouseOut = () => {
  setHover(false);
};

    return (
      <div className="MainGame">
         <div className="OpenCloset"></div>
         <div className="Character"></div>         
      </div>
    );
  };
  
  export default ChangeCloth;