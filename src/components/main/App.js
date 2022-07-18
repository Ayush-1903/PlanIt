import React from 'react';
import Home from '../home/Home';
import SignUp from '../form/SignUp';
import SignIn from '../form/SignIn';
import Category from '../category/selection/Category';
import Student from '../category/school/School';
import College from '../category/college/College';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/category' element={<Category />}/>
        <Route path='/school' element={<Student />}/>
        <Route path='/college' element={<College />}/>
      </Routes>
    </div>
  );
} 

export default App;