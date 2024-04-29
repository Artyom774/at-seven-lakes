import AdminHouse from '../../images/map-marks/admin-house.svg';
import SummerHouse from '../../images/map-marks/summer-house.svg';
import WinterHouse from '../../images/map-marks/winter-house.svg';
import Sauna from '../../images/map-marks/sauna.svg';
import WinterHouseWithSauna from '../../images/map-marks/winter-house-with-sauna.svg';
import GuestHouse from '../../images/map-marks/guest-house.svg';
import Shower from '../../images/map-marks/shower.svg';
import OutdoorToilet from '../../images/map-marks/outdoor-toilet.svg';
import Pontoon from '../../images/map-marks/pontoon.svg';
import LargeBanquetHall from '../../images/map-marks/large-banquet-hall.svg';

interface legendPointsProps {
  title: string,
  image: string,
}

const legendPoints: legendPointsProps[] = [
  {
    title: 'Администрация',
    image: AdminHouse,
  },
  {
    title: 'Летние домики',
    image: SummerHouse,
  },
  {
    title: 'Зимние домики',
    image: WinterHouse,
  },
  {
    title: 'Бани и сауны',
    image: Sauna,
  },
  {
    title: 'Зимний домик с баней',
    image: WinterHouseWithSauna,
  },
  {
    title: 'Гостевой дом',
    image: GuestHouse,
  },
  {
    title: 'Душевая',
    image: Shower,
  },
  {
    title: 'Уличный туалет',
    image: OutdoorToilet,
  },
  {
    title: 'Понтон',
    image: Pontoon,
  },
  {
    title: 'Большой банкетный зал',
    image: LargeBanquetHall,
  },
];

export default legendPoints;
