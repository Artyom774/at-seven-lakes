import React, { FC } from 'react';
import './MapSection.scss';

const MapSection: FC = () => {
  return (
    <section className='map-section'>
      <iframe
        className='map-section__map'
        title='yandex-map'
        src='https://yandex.ru/map-widget/v1/?um=constructor%3Addc5a4c320d0b115b70a2e7115699554cd5f6d71b67c27743f5953b2986fbb56&amp;source=constructor'
        width='1280'
        height='460'
      ></iframe>
    </section>
  );
};

export default MapSection;
