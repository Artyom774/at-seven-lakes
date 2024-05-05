import React, { FC } from 'react';
import './TextSection.scss';

interface TextSectionProps {
  title: string,
  text: string,
}

const TextSection: FC<TextSectionProps> = ({ title, text }) => {
  return (
    <section className='text-section'>
      <h3 className='text-section__title'>{title}</h3>
      <p className='text-section__text'>{text}</p>
    </section>
  );
};

export default TextSection;
