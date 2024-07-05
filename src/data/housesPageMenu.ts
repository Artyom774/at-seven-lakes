import { HouseType } from '../utils/enums';
import SummerHouseImage from './houses/14/14_01.jpg';
import WinterHouseImage from './houses/07/07_01.jpg';
import SaunaImage from './houses/21a/21a_03.jpg';
import GuestImage from './houses/25/25_03.jpg';

interface IHousesPageMenu {
  type: HouseType,
  caption: string,
  image: string,
}

const housesPageMenu: IHousesPageMenu[] = [
  {
    type: HouseType.SUMMER_HOUSE,
    caption: 'Летние домики',
    image: SummerHouseImage,
  },
  {
    type: HouseType.WINTER_HOUSE,
    caption: 'Зимние домики',
    image: WinterHouseImage,
  },
  {
    type: HouseType.SAUNA,
    caption: 'Бани и сауны',
    image: SaunaImage,
  },
  {
    type: HouseType.GUEST_HOUSE,
    caption: 'Гостевой дом',
    image: GuestImage,
  },
];

export default housesPageMenu;
