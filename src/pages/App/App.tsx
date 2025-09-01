import React, { FC, useState } from 'react';
import './App.scss';
import MainPage from '../MainPage';
import PlanPage from '../PlanPage';
import HousesPage from '../HousesPage';
import MapPage from '../MapPage';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';
import { main, plan, houses, map } from '../../utils/navTitles';

const TABS = [main, plan, houses, map];

const TAB_HASHES: Record<string, string> = {
  [main.path]: '#main',
  [plan.path]: '#plan',
  [houses.path]: '#houses',
  [map.path]: '#map',
};
const HASH_TO_TAB: Record<string, string> = {
  '#main': main.path,
  '#plan': plan.path,
  '#houses': houses.path,
  '#map': map.path,
};

const App: FC = () => {
  const [activeTab, setActiveTab] = useState(main.path);

  // При загрузке страницы открывать вкладку по hash
  React.useEffect(() => {
    const hash = window.location.hash;
    if (HASH_TO_TAB[hash]) {
      setActiveTab(HASH_TO_TAB[hash]);
    }
  }, []);

  // При смене вкладки менять hash
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = TAB_HASHES[tab];
  };

  const renderPage = () => {
    switch (activeTab) {
      case main.path:
        return <MainPage />;
      case plan.path:
        return <PlanPage title={plan.title} />;
      case houses.path:
        return <HousesPage title={houses.title} />;
      case map.path:
        return <MapPage title={map.title} />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className='page'>
      <Header activeTab={activeTab} setActiveTab={handleTabChange} tabs={TABS} tabHashes={TAB_HASHES} />
      {renderPage()}
      <Footer />
      <div className='page__additional-info'>Сайт для некоммерческого использования</div>
    </div>
  );
};

export default App;
