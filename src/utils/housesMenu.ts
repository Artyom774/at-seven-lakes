import { HouseType } from './enums';
import TestImage from '../images/description/test-image.jpg';

interface IHousesMenu {
  type: HouseType,
  caption: string,
  image: string,
}

const housesMenu: IHousesMenu[] = [
  {
    type: HouseType.SUMMER_HOUSE,
    caption: 'Летние домики',
    image: TestImage,
  },
  {
    type: HouseType.WINTER_HOUSE,
    caption: 'Зимние домики',
    image: TestImage,
  },
  {
    type: HouseType.SAUNA,
    caption: 'Бани и сауны',
    image: TestImage,
  },
  {
    type: HouseType.GUEST_HOUSE,
    caption: 'Гостевой дом',
    image: TestImage,
  },
];

export default housesMenu;
