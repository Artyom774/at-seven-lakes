import React, { FC } from 'react';
import './HousePreview.scss';
import housesMenu from '../../utils/housesMenu';
import housesData from '../../data/housesData';
import HouseCard from '../../components/HouseCard/HouseCard';

const HousePreview: FC = () => {
  return (
    <section className='house-peview'>
      <ul className='house-peview__types'>
        {housesMenu.map((type, typeIndex) => {
          return(
            <li className='house-peview__type-item' key={typeIndex} id={type.type}>
              <h3 className='house-peview__type-title'>{type.caption}</h3>
              <ul className='house-peview__house-list'>
                {housesData.filter(house => house.type === type.type || house.additionalType === type.type).map((house, houseIndex) => {
                  return (
                    <HouseCard house={house} key={houseIndex} />
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HousePreview;
