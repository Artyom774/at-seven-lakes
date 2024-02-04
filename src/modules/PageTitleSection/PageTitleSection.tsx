import React, { FC } from 'react';
import './PageTitleSection.scss';

interface PageTitleSectionProps {
  image: string,
  title: string,
  subtitle: string,
}

const PageTitleSection: FC<PageTitleSectionProps> = ({ image, title, subtitle }) => {
  return (
    <section className='page-title-section'>
      <img className='page-title-section__image' src={image} alt={title} />
      <h2 className='page-title-section__title'>{title}</h2>
      <p className='page-title-section__subtitle'>{subtitle}</p>
    </section>
  );
};

export default PageTitleSection;
