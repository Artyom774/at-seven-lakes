import React, { FC } from 'react';
import Banner from '../../modules/Banner/Banner';
import Description from '../../modules/Description/Description';

const MainPage: FC = () => {
  return (
    <main className='main'>
      <Banner />
      <Description />
    </main>
  );
};

export default MainPage;
