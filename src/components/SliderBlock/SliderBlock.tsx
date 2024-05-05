import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SliderBlock.scss';

interface HouseCardProps {
  images: string[],
  alt?: string,
  slidesPerView: number,
  slideWidth: number,
  slideHeight: number,
}

const SliderBlock: FC<HouseCardProps> = ({images, alt, slidesPerView, slideWidth, slideHeight}) => {
  const [swiper, setSwiper] = React.useState<any>(null);

  const handlePrev = () => {
    swiper && swiper.slidePrev();
  };

  const handleNext = () => {
    swiper && swiper.slideNext();
  };

  return (
    <div className='slider-block'>
      {images.length > 1 && <button className='slider-block__slider-button' onClick={handlePrev}></button>}
      <Swiper
        onSwiper={(swiper: any) => setSwiper(swiper)}
        navigation
        slidesPerView={slidesPerView}
        loop={true}
        className='slider-block__slider'
        wrapperClass={`slider-block__slide-wrapper slider-block__slide-wrapper_width_${(slideWidth + 35) * slidesPerView - 35}`}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className='slider-block__image'
                style={{width: `${slideWidth}px`, height: `${slideHeight}px`}}
                src={image}
                alt={alt}
                loading='lazy'
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {images.length > 1 && <button className='slider-block__slider-button slider-block__slider-button_inverted' onClick={handleNext}></button>}
    </div>
  );
};

export default SliderBlock;
