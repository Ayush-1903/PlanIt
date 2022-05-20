import React from 'react';
import Home from './Home';
import SignUp from './SignUp';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
} 

export default App;