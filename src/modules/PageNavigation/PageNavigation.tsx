import React, { FC } from 'react';
import './PageNavigation.scss';
import housesMenu from '../../utils/housesMenu';

const PageNavigation: FC = () => {
  const scrollToItem = (id: string): void => {
    const element: HTMLElement | null = document.getElementById(id);
    element && element.scrollIntoView({ behavior: 'smooth'});
  };

  return (
    <section className='page-navigation'>
      <menu className='page-navigation__menu'>
        {housesMenu.map((item, index) => {
          return (
            <div className='page-navigation__item' key={index} onClick={() => scrollToItem(item.type)}>
              <img className='page-navigation__image' src={item.image} alt={item.caption} />
              <span className='page-navigation__caption'>{item.caption}</span>
            </div>
          );
        })}
      </menu>
    </section>
  );
};

export default PageNavigation;
