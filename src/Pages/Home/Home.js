import React from 'react';
import './Home.css';
import imgN from '../../assets/image/nareman.png';
import {BsArrowRight} from "react-icons/bs";
import { Link } from 'react-scroll';




export const Home =()=> {
  return (
    <div className='container'>
    <div className='home'>
      <div className='row'>
      <div className='hom col-md-7'>
       <h1>Hello, My Name Is <span>Nareman Rahmeh</span></h1>
       <h2>I`M a Frontend Developer</h2>
       <p>i have 2 year of experience building <br/>and designing software  
        ,currently I love work on web application<br/> using technolgies like React ,Angular .</p>
        <Link to='projects' smooth duration={500} className='btn'> <span>Portfolio<BsArrowRight className='svg'/></span></Link >
      </div>
      <div className='col-md-5'>
        <img src={imgN} alt="image"/>
      </div>
      </div>
      </div>
    </div>
  )
}
