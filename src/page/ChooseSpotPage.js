import React from 'react'

const ChooseSpotPage = () => {
  return (

    <div>
      <img
        className="osaka-map"
        alt="오사카"
        src="./images/NocheckOsaka.png"
      />
       <img
        className="tokyo-map"
        alt="도쿄"
        src="./images/NocheckTokyo.png"
      />
       <img
        className="sapporo-map"
        alt="삿포로"
        src="./images/NocheckSapporo.png"
      />
    </div>
  )
}

export default ChooseSpotPage


// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const StartPage = () => {
// const movePage = useNavigate();

//   function goChooseSpot(){
//     movePage('/choosespots');
//   }
//   return (
//     <div className="start-page" >
//       <div className='start-logo'></div>
//       <div className='start-btn'  onClick={goChooseSpot}></div>
//     </div>
//   )
// }

// export default StartPage

