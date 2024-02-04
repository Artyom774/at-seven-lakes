import React, { FC } from 'react';
import './HoldingEventPage.scss';
import PageTitleSection from '../../modules/PageTitleSection/PageTitleSection';
import pageIcon from '../../images/hodling-event-page-icon.jpg';

interface HoldingEventPageProps {
  title: string,
}

const HoldingEventPage: FC<HoldingEventPageProps> = ({ title }) => {
  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='Большие уютные дома для ваших праздничных мероприятий' />
    </main>
  );
};

export default HoldingEventPage;
