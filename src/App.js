
import React, { Fragment } from 'react';
import './App.css';
import { Sidebar } from './Components/Sidebar';
import {Home} from '../src/Pages/Home/Home';
import {About} from './Pages/About/About';
import {MySkills} from './Pages/MySkills/MySkills';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';

function App() {
 
  
  return (
    <Fragment>
    <Sidebar/>
    <Home/>
    <About/>
    <MySkills/>
    <Projects/>
    <Contact/>
    </Fragment>
   
   
  );
}

export default App;
