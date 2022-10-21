import React from 'react';
import './Contact.css';
import { BsTelephoneFill } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

const Contact = () => {
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
       <main>+963937322291</main>
    </div>

    <div className='col-md-4'>
    <span><BsFillGeoAltFill className='svg1'/></span>
      <h3>Office</h3>
       <main>Damascus _ Qaboun</main>
        </div>

        <div className='col-md-4'>
        <span><BsEnvelope className='svg2'/></span>
      <h3>Email</h3>
       <main>naremanrh21@gmail.com</main>
        </div>
        </div>
        <hr className='h-col'/>
        <div className='form-header'>
        <h5>Send Me An Email</h5>
        </div>
        <form className="row g-3">
  <div className="col-md-6">
    <input type="name" className="form-control" id="inputname" placeholder='Name'/>
  </div>
  <div className="col-md-6">
    <input type="email" className="form-control" id="inputemail" placeholder='Email'/>
  </div>
  <div className="col-md-12">
    <input type="text" className="form-control" id="inputsubject" placeholder="Subject"/>
  </div>
  <div className="col-md-12">
    <input type="text" className="form-control" id="inputmessage" placeholder="Message"  rows="3"/>
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