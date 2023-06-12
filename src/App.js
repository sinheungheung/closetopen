import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import AudioPlayer from 'react-audio-player';

import StartPage from './page/StartPage';
import Button from './page/Button';
import GoTokyo from './page/GoTokyo';
import GoOsaka from './page/GoOsaka';
import GoSapporo from './page/GoSapporo';
import GameStart from './page/GameStart';
import ChangeCloth from './page/ChangeCloth';
import Storytelling1 from './page/Storytelling1';

import backgroundMusicFile from './sound/Music.mp3';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div>
      <AudioPlayer
        src={backgroundMusicFile}
        autoPlay={isPlaying}
        loop={true} // 무한반복
      />

      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/Button' element={<Button/>}/>
        <Route path='/GoTokyo' element={<GoTokyo/>}/>
        <Route path='/GoOsaka' element={<GoOsaka/>}/>
        <Route path='/GoSapporo' element={<GoSapporo/>}/>
        <Route path='/GameStart' element={<GameStart/>}/>
        <Route path='/ChangeCloth' element={<ChangeCloth/>}/>
        <Route path='/firststorytelling' element={<Storytelling1/>}/>
      </Routes>
    </div>
  );
}

export default App;
