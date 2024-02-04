import React, { FC } from 'react';
import PageTitleSection from '../../modules/PageTitleSection/PageTitleSection';
import pageIcon from '../../images/map-page-icon.jpg';
import TextSection from '../../modules/TextSection/TextSection';

interface MapPageProps {
  title: string,
}

const MapPage: FC<MapPageProps> = ({ title }) => {
  const textArray: string[] = [
    '100 км по трассе М5 Екб - Члб, поворот на Касли, Кыштым, 16 км указатель б/о У семи озёр',
    '',
    'Адрес: Челябинская бласть, Каслинский район, У семи озёр',
    '',
    'Расстояние от Екатерибунга: 119 км',
    'Расстояние от Челябинска: 125 км',
    'Координты:  55.943508, 60.786078',
  ];

  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='Большие уютные дома для ваших праздничных мероприятий' />
      <TextSection title='Как до нас добраться?' textArray={textArray} />
    </main>
  );
};

export default MapPage;
