import React, { FC } from 'react';
import './LegendPoint.scss';

interface LegendPointProps {
  title: string,
  image: string,
}

const LegendPoint: FC<LegendPointProps> = ({title, image}) => {
  return (
    <li className='legend-point'>
      <div className='legend-point__image-wrapper'>
        <img className='legend-point__image' src={image} alt={title} />
      </div>
      <span className='legend-point__label'>{title}</span>
    </li>
  );
};

export default LegendPoint;
