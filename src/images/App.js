import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import checkPage from './src/checkPage.js';
import Button from './src/Button.js';



function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/Button' element={<Button/>}/>
        <Route path='/checkPage' element={<checkPage/>}/>
      </Routes>
      </Router>
      </div>

  );

}

export default App;
