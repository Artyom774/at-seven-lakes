import React, { FC } from 'react';
import PageTitleSection from '../../modules/PageTitleSection/PageTitleSection';
import TextSection from '../../modules/TextSection/TextSection';
import { mapPageText } from '../../data/pageTexts';
import pageIcon from '../../images/map-page-icon.jpg';

interface MapPageProps {
  title: string,
}

const MapPage: FC<MapPageProps> = ({ title }) => {
  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='Большие уютные дома для ваших праздничных мероприятий' />
      <TextSection title='Как до нас добраться?' text={mapPageText} />
    </main>
  );
};

export default MapPage;
