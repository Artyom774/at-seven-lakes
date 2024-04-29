import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './PageNavigation.scss';
import housesMenu from '../../utils/housesMenu';

const PageNavigation: FC = () => {
  return (
    <section className='page-navigation'>
      <menu className='page-navigation__menu'>
        {housesMenu.map((item, index) => {
          return (
            <Link className='page-navigation__item' key={index} to={`#${item.type}`}>
              <img className='page-navigation__image' src={item.image} alt={item.caption} />
              <span className='page-navigation__caption'>{item.caption}</span>
            </Link>
          );
        })}
      </menu>
    </section>
  );
};

export default PageNavigation;
