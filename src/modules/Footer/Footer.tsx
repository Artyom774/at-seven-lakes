import React, { FC } from 'react';
import './Footer.scss';
import Logo from '../../images/logo_footer.svg';
import WhatsAppIcon from '../../images/icons/whats-app_footer.svg';
import MobileIcon from '../../images/icons/mobile_footer.svg';

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__column'>
        <img className='footer__logo' src={Logo} alt='Логотип' />
        <p className='footer__text'>База отдыха работает и летом и зимой</p>
      </div>
      <div className='footer__column'>
        <h3 className='footer__title'>Контакты</h3>
        <a className='footer__contact' href='tel: +7(931)580-25-78'>
          <img className='footer__contact-icon' src={MobileIcon} alt='Сотовый телефон' />
          <span className='footer__contact-label'>+7(931)580-25-78</span>
        </a>
        <a className='footer__contact' href='https://api.whatsapp.com/send?phone=79315802578' target='_blank' rel='noopener noreferrer'>
          <img className='footer__contact-icon' src={WhatsAppIcon} alt='WhatsApp' />
          <span className='footer__contact-label'>WhatsApp</span>
        </a>
      </div>
      <div className='footer__column'>
        <h3 className='footer__title'>Адрес</h3>
        <p className='footer__text'>Челябинская область,</p>
        <p className='footer__text'>Каслинский район,</p>
        <p className='footer__text'>У Семи озёр</p>
      </div>
    </footer>
  );
};

export default Footer;
