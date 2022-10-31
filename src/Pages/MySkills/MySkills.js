import React, { Fragment, useState } from 'react';
import './Mysklills.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


export const Myskills =()=> {

      const[counterOn ,setCounterOn] = useState (false);
    return (
      <Fragment>
      <ScrollTrigger>
         <div className='container'>
     <div className='skills'>
     
      <div className='skills-header'>
        <h1> <span>My </span>Skills</h1>
        <main>Here is my skills to represent my expertise</main>
       
      </div>

      <div className='skills-main'>
        <div className='row'>
         
        <div className='col-md-6'>

      <div className='skills-bar'>
      <div className='info'>
      <p>Html</p>
      <p className='percent'>
        <CountUp start={0} end={90} duration={3} delay={0}/>%</p>
      </div>
      <div className='bar'>
       <span className='html'></span>
      </div>
      </div>

      <div className='skills-bar'>
      <div className='info'>
      <p>Css</p>
      <p className='percent'>
      <CountUp start={0} end={85} duration={3} delay={0}/>%</p>
      </div>
      <div className='bar'>
       <span className='css'></span>
      </div>
      </div>

      <div className='skills-bar'>
      <div className='info'>
      <p>C#</p>
      <p className='percent'>
      <CountUp start={0} end={50} duration={2} delay={0}/>%</p>
      </div>
      <div className='bar'>
       <span className='c'></span>
      </div>
      </div>

      <div className='skills-bar'>
      <div className='info'>
      <p>JavaScript</p>
      <p className='percent'>
      <CountUp start={0} end={75} duration={3} delay={0}/>%</p>
      </div>
      <div className='bar'>
       <span className='javascript'></span>
      </div>
      </div>
      </div>

      <div className='col-md-6'>
      <div className='skills-bar'>
      <div className='info'>
      <p>Bootstrap</p>
      <p className='percent'>
      <CountUp start={0} end={60} duration={2} delay={0}/>%</p>
       
      </div>
      <div className='bar'>
       <span className='bootstrap'></span>
      </div>
      </div>

      <div className='skills-bar'>
      <div className='info'>
      <p>Jquery</p>
      <p className='percent'>
      <CountUp start={0} end={65} duration={3} delay={0}/>%</p>
      </div>
      <div className='bar'>
       <span className='jquery'></span>
      </div>
      </div>
        
      

      <div className='skills-bar'>
      <div className='info'>
      <p>React</p>
      <p className='percent'>
      <CountUp start={0} end={70} duration={3} delay={0}/>%</p>
      </div>
      <div className='bar'>
       <span className='react'></span>
      </div>
      </div>

      <div className='skills-bar'>
      <div className='info'>
      <p>Asp.net</p>
      <p className='percent'>
      <CountUp start={0} end={50} duration={2} delay={0}/>%</p>
      </div>
      <div className='bar'>
       <span className='asp'></span>
      </div>
      </div>
      
      </div>
      </div>

      </div>
      
      </div>

      </div>

      </ScrollTrigger>
      </Fragment>
     
    )
  }
  
