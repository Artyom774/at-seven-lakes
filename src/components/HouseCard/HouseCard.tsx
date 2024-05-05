import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HouseCard.scss';
import { IHouses } from '../../data/housesData';
import { HouseType } from '../../utils/enums';

interface HouseCardProps {
  house: IHouses,
}

const HouseCard: FC<HouseCardProps> = ({house}) => {
  const [swiper, setSwiper] = React.useState<any>(null);
  
  const handlePrev = () => {
    swiper && swiper.slidePrev();
  };

  const handleNext = () => {
    swiper && swiper.slideNext();
  };
  
  return (
    <li className='house-card'>
      <div className='house-card__swiper-wrapper'>
        {house.images.length > 1 && <button className='house-card__swiper-button' onClick={handlePrev}></button>}
        <Swiper
          onSwiper={(swiper: any) => setSwiper(swiper)}
          navigation
          slidesPerView={1}
          loop={true}
          width={355}
          className='house-card__swiper'
        >
          {house.images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img className='house-card__image' src={image} alt={house.title} loading='lazy' />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {house.images.length > 1 && <button className='house-card__swiper-button house-card__swiper-button_inverted' onClick={handleNext}></button>}
      </div>
      <div className='house-card__info'>
        <h4 className='house-card__bold-text'>
          {house.type === HouseType.SAUNA ? 'Сауна' : 'Дом №'} {house.title}
        </h4>
        <p className='house-card__bold-text'>{house.annotation}</p>
        <br/>
        <p>Вместимость: {house.capacity} гостей{house.winterCapacity && `, зимой ${house.winterCapacity} гостей`}</p>
        <p>{house.description}</p>
        <br/>
        <p><span className='house-card__bold-text'>Стоимость:</span> {house.cost} руб./сутки</p>
        <p className='house-card__bold-text'>{house.additionally}</p>
      </div>
    </li>
  );
};

export default HouseCard;
