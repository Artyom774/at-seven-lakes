import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { main, plan, houses, holdingEvents, map } from '../../utils/nav-titles';
import { phone, whatsApp } from '../../utils/constants';
import Logo from '../../images/logo.svg';
import WhatsAppIcon from '../../images/icons/whats-app.svg';
import MobileIcon from '../../images/icons/mobile.svg';

const Header: FC = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={Logo} alt='Логотип базы отдыха' />
      <div className='header__content'>
        <nav className='header__menu'>
          <NavLink className='header__link' to={main.path}>{main.title}</NavLink>
          <NavLink className='header__link' to={plan.path}>{plan.title}</NavLink>
          <NavLink className='header__link' to={houses.path}>{houses.title}</NavLink>
          <NavLink className='header__link' to={holdingEvents.path}>{holdingEvents.title}</NavLink>
          <NavLink className='header__link' to={map.path}>{map.title}</NavLink>
        </nav>
        <div className='header__contacts'>
          <a className='header__contact-item' href={whatsApp} target='_blank' rel='noopener noreferrer'>
            <img className='header__contact-icon' src={WhatsAppIcon} alt='WhatsApp' />
            <span className='header__contact-label'>WhatsApp</span>
          </a>
          <a className='header__contact-item' href={`tel: ${phone}`}>
            <img className='header__contact-icon' src={MobileIcon} alt='Сотовый телефон' />
            <span className='header__contact-label'>{phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
