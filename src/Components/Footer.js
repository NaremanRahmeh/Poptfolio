import React from 'react';
import './Footer.css';
import {BsLinkedin, BsGithub ,BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='f-content'>
        <span>naremanrh21@gmail.com</span>
        <div className='f-icon'>
        <a href=''> <BsLinkedin className='icon' style={{color:'white',}} size='1.5rem'/></a>
         <BsGithub className='icon' style={{color:'white',}} size='1.5rem'/>
         <BsFacebook className='icon' style={{color:'white',}} size='1.5rem'/>
        </div>
        </div>
    </div>
  )
}

export default Footer