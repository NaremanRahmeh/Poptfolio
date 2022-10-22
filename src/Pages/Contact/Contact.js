import React, { useState } from 'react';
import './Contact.css';
import { BsTelephoneFill } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

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
    <h1><span>Contact</span> Me</h1>
    <h5>Have You Any Questions?</h5>
    </div>

    <div className='content'>
    <div className='row'>

    <div className='col-md-4'>
     <span><BsTelephoneFill className='svg'/></span>
      <h3>Call Us On</h3>
     <main><a  href='https://api.whatsapp.com/send?phone+963937322291' target="_blank">+963937322291</a></main> 
    </div>

    <div className='col-md-4'>
    <span><BsFillGeoAltFill className='svg1'/></span>
      <h3>Office</h3>
       <main>Damascus _ Qaboun</main>
        </div>

        <div className='col-md-4'>
        <span><BsEnvelope className='svg2'/></span>
      <h3>Email</h3>
       <main><a href='mailto:naremanrh21@gmail.com' target="_blank">naremanrh21@gmail.com</a></main> 
        </div>
        </div>
        <hr className='h-col'/>
        <div className='form-header'>
        <h5>Send Me An Email</h5>
        </div>

        <form className="row g-3" ref={form} onSubmit={sendEmail}>
  <div className="col-md-6">
    <input type="text" name='name' className="form-control" placeholder='Enter Name' required/>
  </div>
  <div className="col-md-6">
    <input type="email" name='email'  className="form-control"  placeholder='Email' required/>
  </div>
  <div className="col-md-12">
    <input type="text" name='subject' className="form-control"  placeholder="Subject"/>
  </div>
  <div className="col-md-12">
    <textarea name='message'  className="form-control" placeholder="Message"  rows='5' required/>
  </div>
  <div className="col-md-12">
    <button type="submit" className="btn">Send Message</button>
  </div>
</form>
    </div>
    </div>

    </div>
  )
}

export default Contact