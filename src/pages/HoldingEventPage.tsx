import React, { FC } from 'react';
import PageTitleSection from '../modules/PageTitleSection/PageTitleSection';
import TextSection from '../modules/TextSection/TextSection';
import PageSlider from '../modules/PageSlider/PageSlider';
import InfoCard from '../components/InfoCard/InfoCard';
import { holdingEventPageText } from '../data/pageTexts';
import pageIcon from '../images/hodling-event-page-icon.jpg';

interface HoldingEventPageProps {
  title: string,
}

const HoldingEventPage: FC<HoldingEventPageProps> = ({ title }) => {
  const infoText = 'Узнать условия проведения мероприятий, доступные даты, а также цены вы можете по телефону :  8(931)580-25-78';
  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='Большие уютные дома для ваших праздничных мероприятий' />
      <PageSlider />
      <TextSection title='Наши услуги' text={holdingEventPageText} />
      <InfoCard text={infoText} />
    </main>
  );
};

export default HoldingEventPage;
