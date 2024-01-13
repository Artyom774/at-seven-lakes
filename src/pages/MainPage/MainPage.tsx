import React, { FC } from 'react';
import './MainPage.scss';
import Banner from '../../modules/Banner/Banner';
import Description from '../../modules/Description/Description';

const MainPage: FC = () => {
  return (
    <main className='main-page'>
      <Banner />
      <Description />
    </main>
  );
};

export default MainPage;
