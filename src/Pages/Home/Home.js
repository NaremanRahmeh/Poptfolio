import React from 'react';
import './Home.css';
import imgN from '../../assets/image/nareman.png';
import {BsArrowRight} from "react-icons/bs";
import { Link } from 'react-scroll';




export const Home =()=> {
  return (
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

      {/* <div className='social'>
  <div>
      <a target='_blank'  rel="noreferrer" href='https://www.linkedin.com/in/nareman-rahmeh-6a5076250/'>
        <BsLinkedin className='linked-link' style={{width:'20px' , height:'20px'}} />
      </a>
  </div>
  <div>
      <a target='_blank'  rel="noreferrer" href='https://instagram.com/nareman_rahmeh?igshid=YmMyMTA2M2Y='>
        <BsInstagram className='insta-link' style={{width:'20px' , height:'20px'}}/>
      </a>
  </div>
  <div>
      <a target='_blank' rel="noreferrer" href='https://www.facebook.com/profile.php?id=100067804788363'>
        <AiOutlineFacebook className='fac-link' style={{width:'20px' , height:'20px'}}/>
      </a>
  </div>
  <div>
      <a target='_blank' rel="noreferrer" href='https://github.com/NaremanRahmeh'>
        <BsGithub className='git-link' style={{width:'20px' , height:'20px'}}/>
      </a>
  </div>
 </div> */}
      

    </div>
  )
}
