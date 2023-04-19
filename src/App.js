import './App.css';
import ChooseSpotPage from './page/ChooseSpotPage';
import StartPage from './page/StartPage';
import CheckPage from './page/CheckPage';
import Button from './page/Button';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/choosespots' element={<ChooseSpotPage/>}/>
        <Route path='/Button' element={<Button/>}/>
        <Route path='/checkPage' element={<CheckPage/>}/>
      </Routes>
    </div>
  );
}

export default App;