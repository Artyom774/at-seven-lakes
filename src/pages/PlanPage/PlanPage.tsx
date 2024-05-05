import React, { FC } from 'react';
import PageTitleSection from '../../modules/PageTitleSection/PageTitleSection';
import BasePlan from '../../modules/BasePlan/BasePlan';
import TextSection from '../../modules/TextSection/TextSection';
import { planPageText } from '../../data/pageTexts';
import pageIcon from '../../images/plan-page-icon.jpg';

interface PlanPageProps {
  title: string,
}

const PlanPage: FC<PlanPageProps> = ({ title }) => {
  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='План базы' />
      <BasePlan />
      <TextSection title='Важно!' text={planPageText} />
    </main>
  );
};

export default PlanPage;
