import React, { FC } from 'react';
import './ContactInfo.scss';
import { phone, whatsApp } from '../../utils/constants';
import LocationIcon from '../../images/icons/location.svg';
import MobileIcon from '../../images/icons/mobile.svg';

const ContactInfo: FC = () => {
  return (
    <section className='contact-info'>
      <a className='contact-info__point' href='https://yandex.ru/maps/-/CDGYMCJD' target='_blank' rel='noopener noreferrer'>
        <img className='contact-info__icon' src={LocationIcon} alt='Местоположение' />
        <span className='contact-info__text'>Челябинская бласть, Каслинский район,<br/>клуб "Карась"</span>
      </a>
      <div className='contact-info__point'>
        <a className='contact-info__text' href={`tel: ${phone}`}>{phone}</a>
      </div>
      <a className='contact-info__point' href={whatsApp} target='_blank' rel='noopener noreferrer'>
        <img className='contact-info__icon' src={MobileIcon} alt='Сотовый телефон' />
        <span className='contact-info__text'>Вы можете позвонить нам по телефону или через WhatsApp</span>
      </a>
    </section>
  );
};

export default ContactInfo;
