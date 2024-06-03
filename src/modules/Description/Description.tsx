import React, { FC } from 'react';
import './Description.scss';
import DescriptionCard from '../../components/DescriptionCard/DescriptionCard';
import mainPageData from '../../data/mainPageData/mainPageData';

const Description: FC = () => {
  return (
    <section className='description'>
      {mainPageData.map((item, index) => {
        return (
          <DescriptionCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            description={item.decription}
            image={item.image}
            isInvertedCard={Boolean(index % 2)}
          />
        );
      })}
    </section>
  );
};

export default Description;
