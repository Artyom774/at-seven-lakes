import React, { FC } from 'react';
import './DescriptionCard.scss';

interface DescriptionCardProps {
  title: string,
  subtitle: string,
  description: string,
  image: string,
  isInvertedCard: boolean,
}

const DescriptionCard: FC<DescriptionCardProps> = ({ title, subtitle, description, image, isInvertedCard }) => {
  return (
    <div className={`description-card ${isInvertedCard && 'description-card_inverted'}`}>
      <div className='description-card__text-block'>
        <h2 className='description-card__title'>{title}</h2>
        <p className='description-card__subtitle'>{subtitle}</p>
        <p className='description-card__description'>{description}</p>
      </div>
      <img className='description-card__image' src={image} alt={title} />
    </div>
  );
};

export default DescriptionCard;
