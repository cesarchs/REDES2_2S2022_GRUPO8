import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Admins } from './pages/admins';
import { Developers } from './pages/developers';
import { Deptos } from './pages/deptos';
import { Economia } from './pages/economia'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={ <Home/> } />
              <Route path='/admins' element={ <Admins/> } />
              <Route path='/developers' element={ <Developers/> } />
              <Route path='/deptos' element={ <Deptos/> } />
              <Route path='/economia' element={ <Economia/> } />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
