import React, { Fragment, useState } from 'react';
import './Sidebar.css';
import Logo from './../assets/image/logo-n.png';
import {BsXLg, BsList ,BsFillHouseDoorFill,BsPersonFill ,BsFillAwardFill,BsFillCalendarCheckFill,BsEnvelopeFill} from "react-icons/bs";
import { Link } from 'react-scroll';

export const Sidebar = () => {
      
          const [nav ,setNav] =useState(false);

        const links=[
          {
            id: 1,
            link: 'home' ,
            icon :<BsFillHouseDoorFill style={{width:'15px',height:'15px',marginBottom:'6px', marginRight:'2px'}}/>
          },
          {
            id: 2,
            link: 'about' ,
            icon :<BsPersonFill style={{width:'15px',height:'15px',marginBottom:'6px', marginRight:'2px'}}/>
          },
          {
            id: 3,
            link: 'myskills' ,
            icon :<BsFillAwardFill style={{width:'15px',height:'15px',marginBottom:'6px', marginRight:'2px'}}/>
          },
          {
            id: 4,
            link: 'projects' ,
            icon :<BsFillCalendarCheckFill style={{width:'15px',height:'15px',marginBottom:'6px', marginRight:'2px'}}/>
          },
          {
            id: 5,
            link: 'contact' ,
            icon :<BsEnvelopeFill style={{width:'15px',height:'15px',marginBottom:'6px', marginRight:'2px'}}/>
          },
        ] 
  return (
    <Fragment>
      <div className='container'>

      <header id='header' className='fixed-top justify-between'>
      <div className='container'>
        <a className="navbar-brand mr-auto" href="#"> <img src={Logo} alt='nareman'/></a>
        </div>

        <ul className='flex menu'>
          {links.map(({id ,link ,icon}) =>(
               
               <li key={id} className='px-4 cursor-pointer'>
               <a href=''><Link to={link} smooth duration={500}><span>{icon}</span>{link}</Link></a> 
               </li>

          ))}
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 icons'>
          {nav ? <BsXLg size ={30}/> : <BsList size ={30}/>}
         
        </div>


        {nav && (
           <ul className='flex flex-col justify-center h-screen bg-gradient-to-b 
            mobile-nav'>
             {links.map(({id ,link}) =>(
             
             <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <a href=''><Link onClick={() => setNav (!nav)} to={link} smooth duration={500}>{link}</Link></a> 
             </li>

        ))}
        
           </ul>

        )}
             
             
        </header>
        

        </div>
    </Fragment>
  )
}
