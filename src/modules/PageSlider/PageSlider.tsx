import React, { FC } from 'react';
import './PageSlider.scss';
import SliderBlock from '../../components/SliderBlock/SliderBlock';
import TestImage from '../../images/description/test-image.jpg';

const PageSlider: FC = () => {
  return (
    <section className='page-slider'>
      <SliderBlock images={[TestImage, TestImage, TestImage, TestImage, TestImage, TestImage]} slidesPerView={4} slideWidth={270} slideHeight={250} />
    </section>
  );
};

export default PageSlider;
