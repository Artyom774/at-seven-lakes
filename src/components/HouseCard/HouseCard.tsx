import React, { FC } from 'react';
import './HouseCard.scss';
import SliderBlock from '../SliderBlock/SliderBlock';
import { IHouse } from '../../data/housesData';
import { HouseType } from '../../utils/enums';

interface HouseCardProps {
  house: IHouse,
}

const HouseCard: FC<HouseCardProps> = ({house}) => {
  return (
    <li className='house-card'>
      <SliderBlock images={house.images} alt={house.title} slidesPerView={1} slideWidth={355} />
      <div className='house-card__info'>
        <h4 className='house-card__bold-text'>
          {house.type !== HouseType.SUMMER_HOUSE
            ? `${house.type === HouseType.SAUNA ? 'Сауна' : 'Дом №'} ${house.title}`
            : house.annotation}
        </h4>
        {house.type !== HouseType.SUMMER_HOUSE && <p className='house-card__bold-text'>{house.annotation}</p>}
        <br/>
        <p>Вместимость: до {house.capacity} гостей{house.winterCapacity && `, зимой до ${house.winterCapacity} гостей`}</p>
        <br/>
        <p>{house.description}</p>
        <br/>
        <p><span className='house-card__bold-text'>Стоимость:</span> {house.cost} {house.costName}</p>
        <p className='house-card__bold-text'>{house.additionally}</p>
      </div>
    </li>
  );
};

export default HouseCard;
