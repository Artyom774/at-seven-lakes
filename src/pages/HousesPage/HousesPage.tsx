import React, { FC } from 'react';
import PageTitleSection from '../../modules/PageTitleSection/PageTitleSection';
import PageNavigation from '../../modules/PageNavigation/PageNavigation';
import pageIcon from '../../images/houses-page-icon.jpg';

interface HousesPageProps {
  title: string,
}

const HousesPage: FC<HousesPageProps> = ({ title }) => {
  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='Выбор домика для вашего отдыха' />
      <PageNavigation />
    </main>
  );
};

export default HousesPage;
