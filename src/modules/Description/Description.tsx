import React, { FC } from 'react';
import './Description.scss';
import DescriptionCard from '../../components/DescriptionCard/DescriptionCard';
import descriptionBlock from '../../utils/description-block';

const Description: FC = () => {
  return (
    <section className='description'>
      {descriptionBlock.map((item, index) => {
        return (
          <DescriptionCard
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
