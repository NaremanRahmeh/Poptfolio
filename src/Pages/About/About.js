import React from 'react';
import './About.css';


export const About =()=> {

       
  return (

    <div className='about'>
       <div className='container'>

       <h1>About<span> Me</span></h1> 
       {/* <hr/> */}
       <p> I am a web developer, graduated from Damascus University, Computer Technical Institute, Software Engineering.
       </p>
      
        <div className='box'>      

        <div className='row'>
          <div className='col-md-4 sm-12'>
           <h6><span>Birthday: </span>6 January 2001</h6>
           <hr/>
           <h6><span>Age: </span>22</h6>
           <hr/>
           <h6><span>City: </span>Damascus</h6>
           <hr/>
          </div>
          <div className='col-md-4 sm-12'>
          <h6><span>Phone: </span>0937322291</h6>
           <hr/>
           <h6><span>Email: </span><a href='mailto:naremanrh21@gmail.com'>naremanrh21@gmail.com</a></h6>
           <hr/>
           <h6><span>Freelance : </span>availabel</h6>
           <hr/>
          </div>
          <div className='col-md-4 sm-12'>
          <h6><span>Experience:</span> 2 Year</h6>
          <hr/>
          <button className='btn1'> Download Cv</button>
          </div>
          </div>


          </div>
        </div>
    </div>
  )
}
