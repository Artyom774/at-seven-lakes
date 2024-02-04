import React, { FC } from 'react';
import PageTitleSection from '../../modules/PageTitleSection/PageTitleSection';
import pageIcon from '../../images/plan-page-icon.jpg';

interface PlanPageProps {
  title: string,
}

const PlanPage: FC<PlanPageProps> = ({ title }) => {
  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='План базы' />
    </main>
  );
};

export default PlanPage;
