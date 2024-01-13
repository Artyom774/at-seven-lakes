import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from '../MainPage/MainPage';
import MapPage from '../MapPage/MapPage';
import PlanPage from '../PlanPage/PlanPage';
import HoldingEventPage from '../HoldingEventPage/HoldingEventPage';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';

const App: FC = () => {
  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/plan' element={<PlanPage />} />
        <Route path='/holding-events' element={<HoldingEventPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
