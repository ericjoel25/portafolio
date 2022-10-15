import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/portafolio/about';
import Skill from './pages/portafolio/skill';
import Myprojects from './pages/portafolio/myProjects';
import Contact from './pages/portafolio/contact';


function App() {
  return (
         
  <BrowserRouter>     
  
    <Routes>   
 
      <Route path='/' element={<Home />} />   
      <Route path='/About' element={< About/>} /> 
      <Route path='/Skill' element={<Skill />} />
      <Route path='/Myprojects' element={<Myprojects />} />
      <Route path='/Contact' element={<Contact />} />
       {/* <Route path='/Verraco' element={< Verraco/>} /> 
      <Route path='/Engordar' element={< Engordar />} /> 
      <Route path='/Destete' element={<Destete />} />
      <Route path='/Vaccination' element={<Vaccination />} />
      <Route path='Home' element={<Home/>} />  */}
    </Routes> 
    
  
  </BrowserRouter>

  );
}

export default App;
