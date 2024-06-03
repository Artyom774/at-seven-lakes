import { CostNameType, HouseType } from '../utils/enums';
import TestImage from '../images/description/test-image.jpg';
import SummerHouse from '../images/map-marks/summer-house.svg';
import WinterHouse from '../images/map-marks/winter-house.svg';
import SmallWinterHouse from '../images/map-marks/small-winter-house.svg';
import Sauna from '../images/map-marks/sauna.svg';
import WinterHouseWithSauna from '../images/map-marks/winter-house-with-sauna.svg';
import GuestHouse from '../images/map-marks/guest-house.svg';

import images07 from './houses/07';
import images13a from './houses/13a';
import images13b from './houses/13b';
import images14 from './houses/14';
import images16 from './houses/16';
import images18 from './houses/18';
import images20 from './houses/20';
import images21 from './houses/21';
import images21a from './houses/21a';
import images22 from './houses/22';
import images22a from './houses/22a';
import images23 from './houses/23';
import images24 from './houses/24';
import images25 from './houses/25';
import images26 from './houses/26';
import images27 from './houses/27';
import images28 from './houses/28';
import images30 from './houses/30';

export interface IHouses {
  title: string,
  type: HouseType,
  mapMark: string,
  left: number,
  top: number,
  images: string[],
  annotation?: string,
  capacity: number,
  winterCapacity?: number,
  description: string,
  cost: number,
  costName: CostNameType,
  additionally?: string,
}

const summerHouseAnnotation: string = 'Летний (щитовой) домик';
const summerHouseDescription: string = 'Двухкомнатный с верандой, с мангальной зоной и зоной отдыха';

const housesData: IHouses[] = [
  {
    title: '4',
    type: HouseType.SUMMER_HOUSE,
    mapMark: WinterHouse,
    left: 135,
    top: 222,
    images: [TestImage, TestImage, TestImage],
    annotation: summerHouseAnnotation,
    capacity: 4,
    description: summerHouseDescription,
    cost: 800,
    costName: CostNameType.PER_BED,
  },
  {
    title: '6',
    type: HouseType.SUMMER_HOUSE,
    mapMark: SummerHouse,
    left: 276,
    top: 227,
    images: [TestImage, TestImage, TestImage],
    annotation: summerHouseAnnotation,
    capacity: 4,
    description: summerHouseDescription,
    cost: 800,
    costName: CostNameType.PER_BED,
  },
  {
    title: '7',
    type: HouseType.WINTER_HOUSE,
    mapMark: WinterHouse,
    left: 336,
    top: 229,
    images: images07,
    annotation: 'Зимний/Летний дом',
    capacity: 7,
    description: `В аренду коттеджа включено:
    •	3 спальни по 2 одноместных кроватей
    •	1 полутороспальная тахта
    •	Электро-сауна
    •	Банные простыни
    •	Туалет комната, душевая
    •	Встроенная кухня с плитой и раковиной
    •	Посуда
    •	 Чайник, Микроволновка, холодильник
    •	ЖК панель
    •	Ортопедический матрас, постельное белье, одеяло, плед
    •	Мангальная зона, зона отдыха, дрова`,
    cost: 7500,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '9',
    type: HouseType.SUMMER_HOUSE,
    mapMark: SummerHouse,
    left: 213,
    top: 186,
    images: [TestImage, TestImage, TestImage],
    annotation: summerHouseAnnotation,
    capacity: 4,
    description: summerHouseDescription,
    cost: 800,
    costName: CostNameType.PER_BED,
  },
  {
    title: '10',
    type: HouseType.SUMMER_HOUSE,
    mapMark: SummerHouse,
    left: 276,
    top: 186,
    images: [TestImage, TestImage, TestImage],
    annotation: summerHouseAnnotation,
    capacity: 4,
    description: summerHouseDescription,
    cost: 800,
    costName: CostNameType.PER_BED,
  },
  {
    title: '11',
    type: HouseType.SUMMER_HOUSE,
    mapMark: SummerHouse,
    left: 336,
    top: 186,
    images: [TestImage, TestImage, TestImage],
    annotation: summerHouseAnnotation,
    capacity: 4,
    description: summerHouseDescription,
    cost: 800,
    costName: CostNameType.PER_BED,
  },
  {
    title: '13a',
    type: HouseType.SMALL_WINTER_HOUSE,
    mapMark: SmallWinterHouse,
    left: 755,
    top: 116,
    images: images13a,
    annotation: 'Зимний/Летний дом',
    capacity: 3,
    description: `Двухэтажный шестиугольный дом из деревянного бруса с застекленной верандой. На веранде диван скамейка и стол
    В аренду коттеджа включено:
    •	1 спальня с 3 одноместными кроватями на втором этаже
    •	печь
    •	Ванная с туалетом
    •	Встроенная кухня с плитой и раковиной
    •	Посуда
    •	Чайник, микроволновка, холодильник
    •	ЖК панель
    •	Ортопедический матрас, постельное белье, одеяло, плед
    •	мангальная зона, дрова`,
    cost: 3500,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '13б',
    type: HouseType.SMALL_WINTER_HOUSE,
    mapMark: SmallWinterHouse,
    left: 815,
    top: 116,
    images: images13b,
    annotation: 'Зимний/Летний дом',
    capacity: 3,
    description: `Двухэтажный шестиугольный дом из деревянного бруса с застекленной верандой. На веранде диван скамейка и стол
    В аренду коттеджа включено:
    •	1 спальня с 3 одноместными кроватями на втором этаже
    •	печь
    •	Ванная с туалетом
    •	Встроенная кухня с плитой и раковиной
    •	Посуда
    •	Чайник, микроволновка, холодильник
    •	ЖК панель
    •	Ортопедический матрас, постельное белье, одеяло, плед
    •	мангальная зона, дрова`,
    cost: 3500,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '14',
    type: HouseType.SUMMER_HOUSE,
    mapMark: SummerHouse,
    left: 764,
    top: 277,
    images: images14,
    annotation: summerHouseAnnotation,
    capacity: 4,
    description: summerHouseDescription,
    cost: 800,
    costName: CostNameType.PER_BED,
  },
  {
    title: '15',
    type: HouseType.SUMMER_HOUSE,
    mapMark: SummerHouse,
    left: 820,
    top: 234,
    images: [TestImage],
    annotation: summerHouseAnnotation,
    capacity: 4,
    description: summerHouseDescription,
    cost: 800,
    costName: CostNameType.PER_BED,
  },
  {
    title: '16',
    type: HouseType.SUMMER_HOUSE,
    mapMark: SummerHouse,
    left: 818,
    top: 281,
    images: images16,
    annotation: summerHouseAnnotation,
    capacity: 4,
    description: summerHouseDescription,
    cost: 800,
    costName: CostNameType.PER_BED,
  },
  {
    title: '17',
    type: HouseType.SUMMER_HOUSE,
    mapMark: SummerHouse,
    left: 845,
    top: 326,
    images: [TestImage],
    annotation: summerHouseAnnotation,
    capacity: 4,
    description: summerHouseDescription,
    cost: 800,
    costName: CostNameType.PER_BED,
  },
  {
    title: '18',
    type: HouseType.SUMMER_HOUSE,
    mapMark: SummerHouse,
    left: 776,
    top: 334,
    images: images18,
    annotation: summerHouseAnnotation,
    capacity: 4,
    description: summerHouseDescription,
    cost: 800,
    costName: CostNameType.PER_BED,
  },
  {
    title: '20',
    type: HouseType.WINTER_HOUSE,
    mapMark: WinterHouse,
    left: 558,
    top: 315,
    images: images20,
    annotation: 'Зимний/Летний 2-этажный дом из сруба с печным отоплением',
    capacity: 11,
    description: `В аренду коттеджа включено:
    •	1 спальня с 3 одноместными кроватями и диваном – 1 этаж
    •	1 спальня с 3 одноместными кроватями и балконом – 2 этаж
    •	2 спальни по 2 кровати – 2 этаж
    •	Ванная комната
    •	туалет
    •	встроенная кухня плитой и раковиной
    •	печь
    •	Каминный зал
    •	Чайник, Микроволновка, холодильник
    •	Посуда
    •	ЖК панель
    •	Матрас, постельное белье, одеяло, плед
    •	мангальная зона, зона отдыха, дрова`,
    cost: 10000,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '21',
    type: HouseType.WINTER_HOUSE,
    mapMark: WinterHouse,
    left: 629,
    top: 315,
    images: images21,
    annotation: 'Летний дом с каменными ппечами',
    capacity: 17,
    description: 'Зимний/Летний 2-этажный дом из сруба с печным отоплением',
    cost: 15000,
    costName: CostNameType.PER_DAY,
    additionally: 'Рядом с домом банька 21А, за доп. плату 2.000 руб/полсуток',
  },
  {
    title: '21а',
    type: HouseType.SAUNA,
    mapMark: Sauna,
    left: 710,
    top: 316,
    images: images21a,
    capacity: 4,
    description: `Одноэтажная на 4 гостей
    В аренду включено:
    •	Парилка
    •	душевая`,
    cost: 3000,
    costName: CostNameType.PER_DAY_HALF,
  },
  {
    title: '22',
    type: HouseType.WINTER_HOUSE,
    mapMark: WinterHouse,
    left: 646,
    top: 374,
    images: images22,
    annotation: 'Зимний/Летний 2-этажный дом с каминным отоплением',
    capacity: 9,
    winterCapacity: 6,
    description: `В аренду коттеджа включено:
    •	2 спальни по 3 одноместных кровати – 2 этаж
    •	1 спальня с 3 одноместными кроватями – пристрой неотапливаемый
    •	Ванная комната с туалетом
    •	Встроенная кухня с плитой и раковиной
    •	Каминный зал на 9 посадочных мест
    •	Чайник, микроволновка, холодильник
    •	Посуда
    •	ЖК панель
    •	Ортопедический матрас, постельное белье, одеяло, плед
    •	Крытый дворик с зоной отдыха
    •	Мангальная зона, дрова`,
    cost: 9000,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '22а',
    type: HouseType.SAUNA,
    mapMark: Sauna,
    left: 615,
    top: 356,
    images: images22a,
    capacity: 7,
    description: `Одноэтажная на 7 гостей
    В аренду включено:
    •	Комната отдыха с французским окном
    •	Стол, стулья
    •	Парилка
    •	душевая`,
    cost: 2000,
    costName: CostNameType.PER_DAY_HALF,
  },
  {
    title: '23',
    type: HouseType.WINTER_HOUSE_WITH_SAUNA,
    mapMark: WinterHouseWithSauna,
    left: 487,
    top: 96,
    images: images23,
    annotation: 'Зимний/Летний 2-этажный сруб с баней, с верандой, мангальной зоной',
    capacity: 6,
    description: `В аренду включено:
    •	комната с 4 одноместными кроватями и 2 дивана
    •	встроенная кухня с плитой и раковиной
    •	Чайник, Микроволновка, холодильник
    •	Посуда
    •	ЖК панель
    •	бильярд
    •	ортопедический матрас, постельное белье, одеяло, плед
    Баня:
    •	Душевая кабина
    •	туалет
    •	парилка`,
    cost: 7000,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '24',
    type: HouseType.WINTER_HOUSE_WITH_SAUNA,
    mapMark: WinterHouseWithSauna,
    left: 395,
    top: 132,
    images: images24,
    annotation: 'Летний дом с каменными печами',
    capacity: 11,
    description: `В аренду включено:
    •	2 спальни с 3 одноместными кроватями
    •	1 спальня с 2 одноместными кроватями
    •	В гостиной 2 дивана и одноместная кровать
    •	Мини-кухня с плиткой и раковиной
    •	Чайник, Микроволновка, холодильник
    •	Свежее постельное белье и полотенце
    •	Туалет на улице
    •	Мангальная зона, зона отдыха`,
    cost: 8000,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '25',
    type: HouseType.GUEST_HOUSE,
    mapMark: GuestHouse,
    left: 473,
    top: 144,
    images: images25,
    annotation: 'Летний трёхэтажный (банкетный) дом с отоплением, с мангальной зоной',
    capacity: 30,
    description: `1 этаж – банкетный зал на 50 мест со встроенной кухней
    2-3 этажи (отдельный вход с улицы) – спальные места на 30 гостей
    В аренду включено:
    1 этаж
    •	Каминный зал (до 50 посадочных мест)
    •	Большая кухня с островком  (2 плиты, 2 мойки)
    •	2 чайника, 2 микроволновки, холодильник, посудомоечная машина
    •	посуда
    •	2 туалета с умывальником
    2 этаж
    •	4 комнаты по 2 места
    •	1 комната – 3 места
    •	1 комната – 4 места
    •	Душевая, туалет
    3 этаж
    •	1 комната – 4 места
    •	1 комната – 5 места
    •	1 комната – 6 места
    •	Туалетная комната`,
    cost: 30000,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '26',
    type: HouseType.WINTER_HOUSE_WITH_SAUNA,
    mapMark: WinterHouseWithSauna,
    left: 600,
    top: 96,
    images: images26,
    annotation: 'Зимний/Летний 2-этажный сруб с баней, с верандой, мангальной зоной. Свой выход к озеру с понтоном',
    capacity: 8,
    description: `В аренду включено:
    •	комната с 3 одноместными кроватями – 1 этаж
    •	комната с 5 одноместными кроватями – 2 этаж, вход с улицы
    •	зала со встроенной кухней с плитой и раковиной
    •	Чайник, Микроволновка, холодильник
    •	Посуда
    •	Свежее постельное белье и полотенце
    Баня:
    •	Туалет
    •	Моечная
    •	Парилка`,
    cost: 7000,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '27',
    type: HouseType.WINTER_HOUSE_WITH_SAUNA,
    mapMark: WinterHouseWithSauna,
    left: 150,
    top: 286,
    images: images27,
    annotation: 'Зимний/Летний дом из сруба с баней, с верандой, мангальной зоной',
    capacity: 14,
    description: `В аренду включено:
    •	2 комнаты по 3 одноместных кровати
    •	1 комната с 4 одноместными кроватями
    •	Встроенная кухня с плитой и раковиной
    •	Диванная зона (3 дивана)
    •	столовая
    •	Каменная печь с плитой, печь
    •	Чайник, Микроволновка, холодильник
    •	Свежее постельное белье и полотенце
    •	Туалет на улице
    Баня:
    •	парилка
    •	моечная`,
    cost: 9000,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '28',
    type: HouseType.WINTER_HOUSE_WITH_SAUNA,
    mapMark: WinterHouseWithSauna,
    left: 133,
    top: 167,
    images: images28,
    annotation: 'Зимний/Летний  двухэтажный дом',
    capacity: 4,
    description: `В аренду включено:
    •	комната с 4 одноместными кроватями – 2 этаж
    •	встроенная кухня с плитой и раковиной
    •	печь
    •	Чайник, микроволновка, холодильник
    •	Ортопедический матрас, постельное белье, одеяло, плед
    •	Моечное отделение: душ, унитаз
    •	парилка
    •	Мангальная зона, зона отдыха`,
    cost: 7000,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '30',
    type: HouseType.SUMMER_HOUSE,
    mapMark: Sauna,
    left: 336,
    top: 147,
    images: images30,
    annotation: summerHouseAnnotation,
    capacity: 4,
    description: summerHouseDescription,
    cost: 800,
    costName: CostNameType.PER_BED,
  },
];

export default housesData;
