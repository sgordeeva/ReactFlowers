import { Swiper, SwiperSlide } from 'swiper/react';
import style from './SwiperComponent.module.css';

import 'swiper/css';
import 'swiper/css/pagination';

import slideImg1 from './../../assets/img/Slide1.png';
import slideImg2 from './../../assets/img/SlideImg2.jpg';
import slideImg3 from './../../assets/img/SlideImg3.jpg';

import { Pagination } from 'swiper';

const SwiperComponent = () => {
  return (
    <div>
      <Swiper
        grabCursor={true}
        pagination={{ el: '.swiper_pagination', clickable: true }}
        modules={[Pagination]}
        className="swiper_container">
        <SwiperSlide>
          <img className={style.sliderImg} src={slideImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.sliderImg} src={slideImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.sliderImg} src={slideImg3} />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper_pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
