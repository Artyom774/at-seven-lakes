import React, { FC } from 'react';
import './Footer.scss';
import { phone, whatsApp } from '../../utils/constants';
import Logo from '../../images/logo_footer.png';
import WhatsAppIcon from '../../images/icons/whats-app_footer.svg';
import MobileIcon from '../../images/icons/mobile_footer.svg';

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__column'>
        <img className='footer__logo' src={Logo} alt='Логотип' />
        <p className='footer__text'>Клуб "Карась" работает круглогодично. Администрация 08:00 - 19:00</p>
        <p className='footer__text_small'>Вся информация, размещённая на сайте, является справочной, не является рекламой.</p>
      </div>
      <div className='footer__column'>
        <h3 className='footer__title'>Контакты</h3>
        <a className='footer__contact' href={`tel: ${phone}`}>
          <img className='footer__contact-icon' src={MobileIcon} alt='Сотовый телефон' />
          <span className='footer__contact-label'>{phone}</span>
        </a>
        <a className='footer__contact' href={whatsApp} target='_blank' rel='noopener noreferrer'>
          <img className='footer__contact-icon' src={WhatsAppIcon} alt='WhatsApp' />
          <span className='footer__contact-label'>WhatsApp</span>
        </a>
      </div>
      <div className='footer__column'>
        <h3 className='footer__title'>Адрес</h3>
        <p className='footer__text'>Челябинская область,<br/>
        Каслинский район,<br/>
        Клуб "Карась"</p>
      </div>
    </footer>
  );
};

export default Footer;
