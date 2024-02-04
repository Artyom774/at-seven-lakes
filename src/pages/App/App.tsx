import React, { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import MainPage from '../MainPage/MainPage';
import PlanPage from '../PlanPage/PlanPage';
import HousesPage from '../HousesPage/HousesPage';
import HoldingEventPage from '../HoldingEventPage/HoldingEventPage';
import MapPage from '../MapPage/MapPage';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';
import { main, plan, houses, holdingEvents, map } from '../../utils/nav-titles';

const App: FC = () => {
  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route path={main.path} element={<MainPage />} />
        <Route path={plan.path} element={<PlanPage title={plan.title} />} />
        <Route path={houses.path} element={<HousesPage title={houses.title} />} />
        <Route path={holdingEvents.path} element={<HoldingEventPage title={holdingEvents.title} />} />
        <Route path={map.path} element={<MapPage title={map.title} />} />
        <Route path='*' element={<Navigate to='/' replace />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
