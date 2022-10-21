import React, { Fragment, useState } from 'react';
import './Sidebar.css';
import Logo from './../assets/image/logo-n.png';
import ProfileN from './../assets/image/nareman.png';
import { AiOutlineEnter } from "react-icons/ai";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsAwardFill } from "react-icons/bs";
import { BsChatDotsFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsListStars } from "react-icons/bs";
// import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
   const[isOpen ,setIsOpen] = useState(false);
   const toggle =() => setIsOpen (!isOpen);

  return (
    <Fragment>
       <div  className='sidebar' fixed='left'>
       <div className='row logo'>
        <div className='col-md-6'>
        <img src={Logo} alt='nareman'/>
        </div>
        <div className='col-md-6'>
        {/* <div onClick={toggle}  className='btn'>
          <BsListStars /></div> */}
        </div>
        </div>
  
        <div className='side-nav'>
        <div className='li active'>
        <a  href= '/' activeclassName='active'>< BsHouseDoorFill className='nav-menu'/><span>Home</span> </a>
       </div>
       <div className='li'>
       <a  href='/About' activeclassName='active' >< BsFillPersonFill className='nav-menu'/><span>About</span> </a>
      </div>
      <div className='li'>
       <a  href='/MySkills' activeclassName='active'>< BsAwardFill className='nav-menu'/><span>MySkills</span> </a>
       </div>

       <div className='li'>
       <a  href='/projects' activeclassName='active'>< BsFillCalendarCheckFill className='nav-menu'/><span>Projects</span> </a>
      </div>
       
       <div className='li' >
       <a  href='#' activeclassName='active'>< BsChatDotsFill className='nav-menu'/><span> Contact</span> </a>
       </div>

          </div>

          <hr className='h-color mx-2'/>

<div className='social'>
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
 </div>
        {/* <div className='logIn'>
        <AiOutlineEnter id='logIn'/>
        </div> */}
       </div>
      {/*
        

        <div className='profile-content'>
        <div className='profile'>
          <div className='profile-details'>
            <img src={ProfileN} />
            <div className='job'>Web Designer</div>
          </div>
          
          <AiOutlineEnter id='log-out'/>
        </div>
        </div>
        <main>{children}</main>

      </div> */}
    </Fragment>
  )
}
