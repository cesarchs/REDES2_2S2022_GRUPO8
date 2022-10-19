import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={ <Home/> } />
              {/* <Route path='/admins' element={ <Login/> } />
              <Route path='/developers' element={ <Register/> } />
              <Route path='/deptos' element={ <Dashboard/> } /> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
