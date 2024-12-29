
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';;

const Carousel = () => {

  const swiperRef = useRef(null);

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        modules={[EffectCoverflow, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2} 
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
 
          768: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3, 
          },
          1440: {
            slidesPerView: 4, 
          }
        }}
      >

        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <img 
              src={`/carousel/carousel-${index + 1}.jpg`}  
              alt={`Project ${index + 1}`} 
              className='object-cover  h-72 lg:h-[500px]' 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
