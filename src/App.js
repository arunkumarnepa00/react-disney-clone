import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Movie from './components/Movie';
import Test from './components/Test';

const App=()=>{
  return (
   <Router>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/home' element={<Home />}/>
      <Route exact path='/movie/:id' element={<Movie/>}/> 
      <Route to='/test' element={<Test/>}/>
    </Routes>
   </Router>
  );
}

export default App;
