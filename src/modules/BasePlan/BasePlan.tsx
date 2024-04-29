import React, { FC } from 'react';
import './BasePlan.scss';
import LegendPoint from '../../ui/LegendPoin';
import legendPoints from './utils/legendPoints';
import mapMarks from './utils/mapMarks';
import BasePlanImage from '../../images/base-plan.jpg';

const BasePlan: FC = () => {
  return (
    <section className='base-plan'>
      <div className='base-plan__plan'>
        <img className='base-plan__bottom-layer' src={BasePlanImage} alt='План базы отдыха' />
        {mapMarks.map((item, index) => {
          return (
            <div className='base-plan__mark' key={index} style={{top: `${item.top}px`, left: `${item.left}px`}}>
              <span className='base-plan__house-number'>{item.caption}</span>
              <img className='base-plan__mark-image' src={item.type} alt='вид домика' />
            </div>
          );
        })}
      </div>
      <ul className='base-plan__legend'>
        {legendPoints.map((item, index) => {
          return (
            <LegendPoint key={index} title={item.title} image={item.image} />
          );
        })}
      </ul>
    </section>
  );
};

export default BasePlan;
