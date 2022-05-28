import React from 'react';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Category from './Category';
import   {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/category' element={<Category />}/>
      </Routes>
    </div>
  );
} 

export default App;