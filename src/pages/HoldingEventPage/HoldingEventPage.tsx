import React, { FC } from 'react';
import PageTitleSection from '../../modules/PageTitleSection/PageTitleSection';
import TextSection from '../../modules/TextSection/TextSection';
import { holdingEventPageText } from '../../data/pageTexts';
import pageIcon from '../../images/hodling-event-page-icon.jpg';

interface HoldingEventPageProps {
  title: string,
}

const HoldingEventPage: FC<HoldingEventPageProps> = ({ title }) => {
  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='Большие уютные дома для ваших праздничных мероприятий' />
      <TextSection title='Наши услуги' text={holdingEventPageText} />
    </main>
  );
};

export default HoldingEventPage;
