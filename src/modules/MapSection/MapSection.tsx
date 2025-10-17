import React, { FC } from 'react';
import './MapSection.scss';

const MapSection: FC = () => {
  return (
    <section className='map-section'>
      <iframe
        className='map-section__map'
        title='yandex-map'
        src='https://yandex.ru/map-widget/v1/?um=constructor%3Abbf8b83cfc2b9c381d426d74425eef1285e3a8d941a941888dfcb1320bb61e3e&amp;source=constructor'
        width='1280'
        height='460'
      ></iframe>
    </section>
  );
};

export default MapSection;
