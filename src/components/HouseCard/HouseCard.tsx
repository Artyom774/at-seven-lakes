import React, { FC } from 'react';
import './HouseCard.scss';
import SliderBlock from '../SliderBlock/SliderBlock';
import { IHouses } from '../../data/housesData';
import { HouseType } from '../../utils/enums';

interface HouseCardProps {
  house: IHouses,
}

const HouseCard: FC<HouseCardProps> = ({house}) => {
  return (
    <li className='house-card'>
      <SliderBlock images={house.images} alt={house.title} slidesPerView={1} slideWidth={355} slideHeight={324} />
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
