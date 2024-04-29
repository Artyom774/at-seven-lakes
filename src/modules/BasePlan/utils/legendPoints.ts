import AdminHouse from '../images/admin-house.svg';
import SummerHouse from '../images/summer-house.svg';
import WinterHouse from '../images/winter-house.svg';
import Sauna from '../images/sauna.svg';
import WinterHouseWithSauna from '../images/winter-house-with-sauna.svg';
import GuestHouse from '../images/guest-house.svg';
import Shower from '../images/shower.svg';
import OutdoorToilet from '../images/outdoor-toilet.svg';
import Pontoon from '../images/pontoon.svg';
import LargeBanquetHall from '../images/large-banquet-hall.svg';

interface legendPointsProp {
  title: string,
  image: string,
}

const legendPoints: legendPointsProp[] = [
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
