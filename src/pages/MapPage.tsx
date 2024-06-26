import React, { FC } from 'react';
import PageTitleSection from '../modules/PageTitleSection/PageTitleSection';
import MapSection from '../modules/MapSection/MapSection';
import ContactInfo from '../modules/ContactInfo/ContactInfo';
import TextSection from '../modules/TextSection/TextSection';
import { mapPageText } from '../data/pageTexts';
import pageIcon from '../images/map-page-icon.jpg';

interface MapPageProps {
  title: string,
}

const MapPage: FC<MapPageProps> = ({ title }) => {
  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='Карта' />
      <MapSection />
      <ContactInfo />
      <TextSection title='Как до нас добраться?' text={mapPageText} />
    </main>
  );
};

export default MapPage;
