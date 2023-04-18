import './App.css';
import ChooseSpotPage from './page/ChooseSpotPage';
import StartPage from './page/StartPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/choosespots' element={<ChooseSpotPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
