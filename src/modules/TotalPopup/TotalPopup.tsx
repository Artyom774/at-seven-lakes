import React, { FC } from 'react';
import './TotalPopup.scss';
import { IHouse } from '../../data/housesData';
import HouseCard from '../../components/HouseCard/HouseCard';
import CloseButtonIcon from '../../images/icons/close-button.svg';

interface TotalPopupProps {
  setCurrentHouse: React.Dispatch<React.SetStateAction<IHouse | null>>,
  house: IHouse,
}

const TotalPopup: FC<TotalPopupProps> = ({setCurrentHouse, house}) => {
  const closePopup = (): void => {
    setCurrentHouse(null);
  };

  return (
    <div className='total-popup'>
      <div className='total-popup__cover' onClick={closePopup}></div>
      <div className='total-popup__content'>
        <img className='total-popup__close' src={CloseButtonIcon} alt='закрыть' onClick={closePopup} />
        <HouseCard house={house} />
      </div>
    </div>
  );
};

export default TotalPopup;
