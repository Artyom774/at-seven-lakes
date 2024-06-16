import React, { FC, useState } from 'react';
import PageTitleSection from '../modules/PageTitleSection/PageTitleSection';
import BasePlan from '../modules/BasePlan/BasePlan';
import TextSection from '../modules/TextSection/TextSection';
import TotalPopup from '../modules/TotalPopup/TotalPopup';
import { planPageText } from '../data/pageTexts';
import { IHouse } from '../data/housesData';
import pageIcon from '../images/plan-page-icon.jpg';

interface PlanPageProps {
  title: string,
}

const PlanPage: FC<PlanPageProps> = ({ title }) => {
  const [currentHouse, setCurrentHouse] = useState<IHouse | null>(null);

  const showHousePopup = (house: IHouse): void => {
    setCurrentHouse(house);
  };

  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='План базы' />
      <BasePlan showHousePopup={showHousePopup} />
      <TextSection title='Важно!' text={planPageText} />
      {currentHouse && <TotalPopup setCurrentHouse={setCurrentHouse} house={currentHouse} />}
    </main>
  );
};

export default PlanPage;
