import React, { FC } from 'react';
import './TextSection.scss';

interface TextSectionProps {
  title: string,
  textArray: string[],
}

const TextSection: FC<TextSectionProps> = ({ title, textArray }) => {
  return (
    <section className='text-section'>
      <h3 className='text-section__title'>{title}</h3>
      <ul className='text-section__text-container'>
        {textArray.map((text, index) => {
          return (
            <li className='text-section__text' key={index}>{text}</li>
          );
        })}
      </ul>
    </section>
  );
};

export default TextSection;
