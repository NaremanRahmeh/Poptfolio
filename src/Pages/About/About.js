import React from 'react';
import './About.css';


export const About =()=> {

       
  return (

    <div className='about'>
       <div className='container'>

       <h1>About<span> Me</span></h1> 
       {/* <hr/> */}
       <p> I am a web developer, graduated from  <br/>Damascus University, Computer Technical Institute, Software Engineering.
       </p>
      
        <div className='box'>      

        <div className='row'>
          <div className='col-md-4 sm-12'>
           <h6>Birthday: <span>6 January 2001</span></h6>
           <hr/>
           <h6>Age: <span>22</span></h6>
           <hr/>
           <h6>City: <span>Damascus</span></h6>
           <hr/>
          </div>
          <div className='col-md-4 sm-12'>
          <h6>Phone: <span>0937322291</span></h6>
           <hr/>
           <h6>Freelance : <span>availabel</span></h6>
           <hr/>
           <h6>Email: <span><a href='mailto:naremanrh21@gmail.com'>naremanrh21@gmail.com</a></span></h6>
           <hr/>
          </div>
          <div className='col-md-4 sm-12'>
          <h6>Experience:<span> 2 Year</span></h6>
          <hr/>
          <button className='btn btn1'><a href='Resume.pdf' download>Download Cv</a></button>
          </div>
          </div>


          </div>
        </div>
    </div>
  )
}
