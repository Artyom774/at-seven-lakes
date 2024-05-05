import React, { FC } from 'react';
import './InfoCard.scss';
import infoIcon from '../../images/icons/info.svg';

interface InfoCardProps {
  text: string,
}

const InfoCard: FC<InfoCardProps> = ({ text }) => {
  return (
    <div className='info-card'>
      <img className='info-card__icon' src={infoIcon} alt='Информация' />
      <p className='info-card__text'>{text}</p>
    </div>
  );
};

export default InfoCard;
