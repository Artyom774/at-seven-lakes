import React, { FC } from 'react';
import './MainPage.scss';
import Banner from '../../modules/Banner/Banner';

const MainPage: FC = () => {
  return (
    <main className='main-page'>
      <Banner />
    </main>
  );
};

export default MainPage;
