import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide , useSwiper} from 'swiper/react';
import { Navigation, Pagination, Scrollbar , A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { motion } from 'framer-motion';
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

  const SliderAbout =[
    {
      image:<img src={project1}/>,
    },
    {
      image:<img src={project2}/>,
    },
    {
      image:<img src={project3}/>,
    },
    {
      image:<img src={project4}/>,
    },
    {
      image:<img src={project5}/>,
    },
    {
      image:<img src={project6}/>,
    },

   ]
   const swiper = useSwiper();
  return (

    <div className='projects'>
      <div className='container'>
      <div className='header-projects'>
      <h1> <span>My </span>Projects</h1>
      </div>

      <div className='s-container'>
       <Swiper
      spaceBetween={40}
      slidesPerView={3}
      slidesPerGroup={1}
      loop={true}
      modules={[Pagination,Navigation,Scrollbar, A11y]}
      className="mySwiper"
      loopFillGroupWithBlank={true}
      // navigation={true}
      navigation
      pagination={{ clickable: true }}
    >   
         {SliderAbout.map(({ image}) =>(
           <SwiperSlide >
              <div className='left-s'>
               <div className='img'>
               {image}
                </div>
              </div>
           </SwiperSlide>
           ))}
    </Swiper>
    </div>
      </div>
      </div> 
  )
}

export default Projects