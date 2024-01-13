import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import Logo from '../../images/logo.svg';
import WhatsAppIcon from '../../images/icons/whats-app.svg';
import MobileIcon from '../../images/icons/mobile.svg';

const Header: FC = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={Logo} alt='Логотип базы отдыха' />
      <div className='header__content'>
        <nav className='header__menu'>
          <NavLink className='header__link' to='/'>О нас</NavLink>
          <NavLink className='header__link' to='/plan'>Размещение</NavLink>
          <NavLink className='header__link' to='/houses'>Домики</NavLink>
          <NavLink className='header__link' to='/holding-events'>Проведение праздников</NavLink>
          <NavLink className='header__link' to='/map'>Расположение базы</NavLink>
        </nav>
        <div className='header__contacts'>
          <a className='header__contact-item' href='https://api.whatsapp.com/send?phone=79315802578' target='_blank' rel='noopener noreferrer'>
            <img className='header__contact-icon' src={WhatsAppIcon} alt='WhatsApp' />
            <span className='header__contact-label'>WhatsApp</span>
          </a>
          <a className='header__contact-item' href='tel: +7(931)580-25-78'>
            <img className='header__contact-icon' src={MobileIcon} alt='Сотовый телефон' />
            <span className='header__contact-label'>+7(931)580-25-78</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
