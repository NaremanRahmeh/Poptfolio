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
import {AnimatePresence, motion} from 'framer-motion';
import { BsList } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

export const Sidebar = ({children}) => {
        
     const[isOpen ,setIsOpen] = useState(false);
     const toggle =()=> setIsOpen(!isOpen);
  return (
    <Fragment>
      <div className='main-container'>
        <motion.div animate={{width :isOpen ?'200px': '40px'}} className="sidebar">

          {/* <section className='side'>
            {side.map((route)=>{

             <NavLink to={route.path} key={route.name}>
              <div className='icon'>
                {route.icon}
              </div>
              <div className='link-text'>
                {route.name}
              </div>
             </NavLink>
            })
            }
          </section> */}
          <div className='top-section'>
           {isOpen && <img src={Logo} alt='nareman'/>} 
            <div className='bars'>
              <BsList onClick={toggle}/>
            </div>
              </div>

            <div className='routes'>

            <div className='side-nav active'>
          <a  href= '/' activeclassName='active'>< BsHouseDoorFill className='nav-menu'/>
          <AnimatePresence>
            {isOpen  &&
          <motion.div><span>Home</span></motion.div>}
          </AnimatePresence>
           </a>
         </div>
         <div className='side-nav' >
       <a  href='/About' activeclassName='active' >< BsFillPersonFill className='nav-menu'/>
       <AnimatePresence>
            {isOpen  &&
          <motion.div><span>About</span></motion.div>}
          </AnimatePresence>
           </a>
      </div>
      <div className='side-nav' >
       <a  href='/MySkills' activeclassName='active'>< BsAwardFill className='nav-menu'/>
       <AnimatePresence>
            {isOpen  &&
          <motion.div><span>MySkills</span></motion.div>}
          </AnimatePresence>
        </a>
       </div>

       <div className='side-nav'>
       <a  href='/projects' activeclassName='active'>< BsFillCalendarCheckFill className='nav-menu'/>
       <AnimatePresence>
            {isOpen  &&
          <motion.div><span>Projects</span></motion.div>}
          </AnimatePresence>
        </a>
      </div>
       
       <div className='side-nav' >
       <a  href='/contact' activeclassName='active'>< BsChatDotsFill className='nav-menu'/>
       <AnimatePresence>
            {isOpen  &&
          <motion.div><span>Contact</span></motion.div>}
          </AnimatePresence>
       </a>
       </div>

            </div>
        </motion.div>
        <main>{children}</main>
      </div>
      
       {/* <div  className='sidebar' fixed='left'>
        <div className='row logo'>
        <div className='col-md-6'>
        <img src={Logo} alt='nareman'/>
        </div>
        <div className='col-md-6'>
      
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
      
       </div> */}
        

        
    </Fragment>
  )
}
