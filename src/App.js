import './App.css';
import ChooseSpotPage from './page/ChooseSpotPage';
import StartPage from './page/StartPage';
import CheckPage from './page/ChooseSpotPage';
import Button from './page/Button';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/ChooseSpotPage' element={<ChooseSpotPage/>}/>
        <Route path='/Button' element={<Button/>}/>
      </Routes>
    </div>
  );
}

export default App;