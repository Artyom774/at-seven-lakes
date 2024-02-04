import React, { FC } from 'react';
import PageTitleSection from '../../modules/PageTitleSection/PageTitleSection';
import TextSection from '../../modules/TextSection/TextSection';
import pageIcon from '../../images/hodling-event-page-icon.jpg';

interface HoldingEventPageProps {
  title: string,
}

const HoldingEventPage: FC<HoldingEventPageProps> = ({ title }) => {
  const textArray: string[] = [
    'Проводим на базе отдыха праздничные торжественные мероприятия: свадьба, юбилей, день рождения, банкет, корпоратив, выпускной  - 2000 руб/чел.',
    '',
    'У нас есть два банкетных зала: большой зал до 100 человек и',
    'Гостевой дом № 25 - банкетный зал до 50 человек.',
    '',
    'В наших домиках есть всё необходимое! Кухня с посудой, туалет и душевые, электричество - 220В, мебель.',
    'Скатерти, накидки на стулья',
    'Живописная ухоженная территория.',
    'Мангальные зоны',
    'Проживание (размещение гостей на ночь) по расценкам базы отдыха в разделе “домики” и “размещение”',
    '',
    'Наши рекомендации:',
    '"Оформление зала" Шмакова Ирина (г.Касли) +79085884226',
    '"Тамада" (г.Касли): +79514461372 Ирина Голышева',
  ];

  return (
    <main className='main'>
      <PageTitleSection image={pageIcon} title={title} subtitle='Большие уютные дома для ваших праздничных мероприятий' />
      <TextSection title='Наши услуги' textArray={textArray} />
    </main>
  );
};

export default HoldingEventPage;
