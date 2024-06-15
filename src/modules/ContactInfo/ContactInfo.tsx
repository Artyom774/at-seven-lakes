import React, { FC } from 'react';
import './ContactInfo.scss';
import { phone } from '../../utils/constants';
import LocationIcon from '../../images/icons/location.svg';
import MobileIcon from '../../images/icons/mobile.svg';

const ContactInfo: FC = () => {
  return (
    <section className='contact-info'>
      <div className='contact-info__point'>
        <img className='contact-info__icon' src={LocationIcon} alt='Местоположение' />
        <span className='contact-info__text'>Челябинская бласть, Каслинский район,<br/>У семи озёр</span>
      </div>
      <div className='contact-info__point'>
        <span className='contact-info__text'>{phone}</span>
      </div>
      <div className='contact-info__point'>
        <img className='contact-info__icon' src={MobileIcon} alt='Сотовый телефон' />
        <span className='contact-info__text'>Вы можете позвонить нам по телефону или через WhatsApp</span>
      </div>
    </section>
  );
};

export default ContactInfo;
