import skillsList from "../data/skillsData";
import "../CSS/skills.scss"

import {Swiper, SwiperSlide} from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Skills() {
  return (
    <>
    <h1> Skills </h1>
    <Swiper  
    slidesPerView={2}
    spaceBetween={0}
    keyboard={{
      enabled: true,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Keyboard, Pagination, Navigation]}
    >
      {skillsList.map((slide) => (
      <SwiperSlide key={slide.id}>
        <div className="skills" >
            <img src={slide.imgSrc} alt= {slide.name} />
          <p>{slide.name}</p>
        </div>
      </SwiperSlide>
      ))}
      
    </Swiper>
    </>
  );
}
export default Skills;
