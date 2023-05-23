import './App.css';
import { Route, Routes } from 'react-router-dom';
import StartPage from './page/StartPage';
import Button from './page/Button';
import GoTokyo from './page/GoTokyo';
import GoOsaka from './page/GoOsaka';
import GoSapporo from './page/GoSapporo';
import GameStart from './page/GameStart';
import ChangeCloth from './page/ChangeCloth';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/Button' element={<Button/>}/>
        <Route path='/GoTokyo' element={<GoTokyo/>}/>
        <Route path='/GoOsaka' element={<GoOsaka/>}/>
        <Route path='/GoSapporo' element={<GoSapporo/>}/>
        <Route path='/GameStart' element={<GameStart/>}/>
        <Route path='/ChangeCloth' element={<ChangeCloth/>}/>
      </Routes>
    </div>
  );
}

export default App;