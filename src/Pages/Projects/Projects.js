import React from 'react';
import './Projects.css';
import Carousel from 'react-bootstrap/Carousel';
import project1 from '../../assets/image/1.PNG';
import project2 from '../../assets/image/2.PNG';
import project3 from '../../assets/image/3.PNG';
import project4 from '../../assets/image/4.PNG';
import project5 from '../../assets/image/5.PNG';
import project6 from '../../assets/image/6.PNG';
import project7 from '../../assets/image/7.PNG';
import project8 from '../../assets/image/8.PNG';
import project9 from '../../assets/image/9.PNG';
import Card from 'react-bootstrap/Card';

const Projects = () => {
  return (

    <div className='projects'>
      <div className='container'>
      <div className='header-projects'>
      <h1> <span>My </span>Projects</h1>
      </div>
      <div className='content-projects'>

      <Carousel>
      <Carousel.Item>
      <div className='row' >
         <div className='col-md-4'>
         <img src={project1}/>
         </div>
         <div className='col-md-4'>
         <img src={project2}/>
         </div>
         <div className='col-md-4'>
         <img src={project3} />
         </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='row '>
         <div className='col-md-4'>
         <img src={project4} />
         </div>
         <div className='col-md-4'>
         <img src={project5} />
         </div>
         <div className='col-md-4'>
         <img src={project6} />
         </div>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className='row'>
         <div className='col-md-4'>
         <img src={project7} />
         </div>
         <div className='col-md-4'>
         <img src={project8} />
         </div>
         <div className='col-md-4'>
         <img src={project9} />
         </div>
        </div>
      
      </Carousel.Item>
    </Carousel>


       </div>
      </div>
      </div>
  )
}

export default Projects