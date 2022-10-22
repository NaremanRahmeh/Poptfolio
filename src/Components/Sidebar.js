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

export const Sidebar = () => {
        
  return (
    <Fragment>

<nav className="navbar navbar-expand-lg " fixed='top' id ='menu-area'>
  <a className="navbar-brand" href="#"> <img src={Logo} alt='nareman'/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
    
      <li className="nav-item">
        <a className="nav-link " href="#">MySkills</a>
      </li>

      <li className="nav-item">
        <a className="nav-link " href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
      
        

        
    </Fragment>
  )
}
