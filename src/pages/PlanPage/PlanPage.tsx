import React, { FC } from 'react';
import PageTitleSection from '../../modules/PageTitleSection/PageTitleSection';
import BasePlan from '../../modules/BasePlan/BasePlan';
import TextSection from '../../modules/TextSection/TextSection';
import pageIcon from '../../images/plan-page-icon.jpg';

interface PlanPageProps {
  title: string,
}

const PlanPage: FC<PlanPageProps> = ({ title }) => {
  const textArray: string[] = [
    'Заезд с 16:00, выезд до 14:00 часов.',
    'Проживание с домашними питомцами возможно при согласовании с администрацией по телефону.',
    '',
    'Услуга бронирования - безвозвратная.',
    '',
    'Парковка автомобилей бесплатна и возможна только на парковочной зоне.',
    '',
    'Мангалы и дрова входят в стоимость аренды домика.',
  ];

  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='План базы' />
      <BasePlan />
      <TextSection title='Важно!' textArray={textArray} />
    </main>
  );
};

export default PlanPage;
