import React, { useState } from 'react';
import './Contact.css';
import { BsTelephoneFill } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsInstagram,BsGithub ,BsFacebook } from "react-icons/bs";
import { motion } from 'framer-motion';
import { BiCheckCircle } from "react-icons/bi";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    

  const [rotate ,setRotat] =React.useState(false);

  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yepqby4', 'template_jktidda', form.current, 'HwN46889aTOBfjuKg')
   e.target.reset()
  };
  return (

    <div className='container'>
    <div className='contact'>
    <div className='contact-header'>
    <h1>Contact<span> Me</span></h1>
    <h5>Have You Any Questions?</h5>
    </div>

    <div className='content'>
    <div className='row'>

    <motion.div className='col-md-4' whileHover={{scale:1.1}}>
     <span><BsTelephoneFill className='svg'/></span>
      <h3>Call Me</h3>
     <main><a  href='https://api.whatsapp.com/send?phone+963937322291' target="_blank">+963937322291</a></main> 
     </motion.div>

    <motion.div className='col-md-4' whileHover={{scale:1.1}}>
    <span><BsFillGeoAltFill className='svg1'/></span>
      <h3>Location</h3>
       <main>Damascus _ Qaboun</main>
        </motion.div>

        <motion.div className='col-md-4' whileHover={{scale:1.1}}>
        <span><BsEnvelope className='svg2'/></span>
      <h3>Email</h3>
       <main><a href='mailto:naremanrh21@gmail.com' target="_blank">naremanrh21@gmail.com</a></main> 
       </motion.div>
{/* 
        <div className='col-md-3'>
        <span>
        <ul>
            <li><a href='https://instagram.com/nareman_rahmeh?igshid=YmMyMTA2M2Y='><BsInstagram className='svgg'/></a></li>
            <li><a href='https://www.facebook.com/profile.php?id=100067804788363'><BsFacebook className='svgg'/></a></li>
            <li><a href='https://github.com/NaremanRahmeh'><BsGithub className='svgg'/></a></li>
            </ul>
        </span>
        </div> */}
        
        </div>
        <div className='form-header'>
        <h5>Send Me An Email</h5>
        </div>

        <form className="row g-3" ref={form} onSubmit={sendEmail}>
  <div className="col-md-6">
    <motion.input animate={{x:10,scale: 1 }} initial={{scale :0}}
    type="text" name='name' className="form-control" placeholder='Enter Name' required/>
  </div>
  <div className="col-md-6">
    <motion.input animate={{x:10,scale: 1 }} initial={{scale :0}}
    type="email" name='email'  className="form-control"  placeholder='Email' required/>
  </div>
  <div className="col-md-12">
    <motion.input animate={{x:10,scale: 1 }} initial={{scale :0}}
     type="text" name='subject' className="form-control"  placeholder="Subject"/>
  </div>
  <div className="col-md-12">
    <motion.textarea animate={{x:10,scale: 1 }} initial={{scale :0}}
     name='message'  className="form-control" placeholder="Message"  rows='5' required/>
  </div>
  <div className="col-md-12">
    <motion.button animate={{rotate: rotate ? 360 : 0}} onClick={()=> {setRotat(!rotate)}}
     className="btn btn1">Send Message</motion.button>
  </div>
</form>
    </div>
    </div>

    </div>
  )
}

export default Contact