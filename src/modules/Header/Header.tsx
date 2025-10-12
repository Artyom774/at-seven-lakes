import React, { FC } from 'react';
import './Header.scss';
import { phone, whatsApp } from '../../utils/constants';
import Logo from '../../images/logo.png';
import WhatsAppIcon from '../../images/icons/whats-app.svg';
import MobileIcon from '../../images/icons/mobile.svg';

interface Tab {
  path: string;
  title: string;
}

export interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: Tab[];
  tabHashes: Record<string, string>;
}

const Header: FC<HeaderProps> = ({ activeTab, setActiveTab, tabs, tabHashes }) => {
  return (
    <header className='header'>
      <img className='header__logo' src={Logo} alt='Логотип клуба' />
      <div className='header__content'>
        <nav className='header__menu'>
          {tabs.map(tab => (
            tab.path === '/' ? (
              <span
                key={tab.path}
                className={`header__link${activeTab === tab.path ? ' header__link--active' : ''}`}
                onClick={() => setActiveTab(tab.path)}
                style={{ cursor: 'pointer' }}
              >
                {tab.title}
              </span>
            ) : (
              <a
                key={tab.path}
                href={tabHashes[tab.path]}
                className={`header__link${activeTab === tab.path ? ' header__link--active' : ''}`}
                onClick={e => {
                  e.preventDefault();
                  setActiveTab(tab.path);
                  window.location.hash = tabHashes[tab.path];
                }}
              >
                {tab.title}
              </a>
            )
          ))}
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
