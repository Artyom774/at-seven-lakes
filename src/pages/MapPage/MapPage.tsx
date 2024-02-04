import React, { FC } from 'react';
import './MapPage.css';
import PageTitleSection from '../../modules/PageTitleSection/PageTitleSection';
import pageIcon from '../../images/map-page-icon.jpg';

interface MapPageProps {
  title: string,
}

const MapPage: FC<MapPageProps> = ({ title }) => {
  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='Большие уютные дома для ваших праздничных мероприятий' />
    </main>
  );
};

export default MapPage;
