import './App.css';
import StartPage from './page/StartPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/start' element={<StartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
