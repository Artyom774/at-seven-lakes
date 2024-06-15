import React, { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import MainPage from '../MainPage';
import PlanPage from '../PlanPage';
import HousesPage from '../HousesPage';
import MapPage from '../MapPage';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';
import { main, plan, houses, map } from '../../utils/navTitles';

const App: FC = () => {
  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route path={main.path} element={<MainPage />} />
        <Route path={plan.path} element={<PlanPage title={plan.title} />} />
        <Route path={houses.path} element={<HousesPage title={houses.title} />} />
        <Route path={map.path} element={<MapPage title={map.title} />} />
        <Route path='*' element={<Navigate to='/' replace />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
