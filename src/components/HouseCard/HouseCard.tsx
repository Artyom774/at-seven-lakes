import React, { FC } from 'react';
import './HouseCard.scss';
import { IHouses } from '../../data/housesData';
import { HouseType } from '../../utils/enums';

interface HouseCardProps {
  house: IHouses,
}

const HouseCard: FC<HouseCardProps> = ({house}) => {
  return (
    <li className='house-card'>
      <img className='house-card__image' src={house.images[0]} alt={house.title} loading='lazy' />
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
