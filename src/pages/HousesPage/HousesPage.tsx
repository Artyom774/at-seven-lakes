import React, { FC } from 'react';
import PageTitleSection from '../../modules/PageTitleSection/PageTitleSection';
import PageNavigation from '../../modules/PageNavigation/PageNavigation';
import HousePreview from '../../modules/HousePreview/HousePreview';
import pageIcon from '../../images/houses-page-icon.jpg';

interface HousesPageProps {
  title: string,
}

const HousesPage: FC<HousesPageProps> = ({ title }) => {
  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='Выбор домика для вашего отдыха' />
      <PageNavigation />
      <p className='main__text'>
        Все наши зимние домики подходят для проживания в летний и зимний период (у них есть возможность отопления).
        <br/><br/>
        Во многих наших домиках есть бани и сауны. Все подробности можно узнать по телефону.
      </p>
      <HousePreview />
    </main>
  );
};

export default HousesPage;
