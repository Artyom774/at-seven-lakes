import React, { FC } from 'react';
import './PageSlider.scss';
import SliderBlock from '../../components/SliderBlock/SliderBlock';
import holdingEventsImages from '../../data/holdingEventPage';

const PageSlider: FC = () => {
  return (
    <section className='page-slider'>
      <SliderBlock images={holdingEventsImages} slidesPerView={4} slideWidth={270} slideHeight={250} />
    </section>
  );
};

export default PageSlider;
