/* eslint-disable max-len */
import { CostNameType, HouseType } from '../utils/enums';
import WinterHouse from '../images/map-marks/winter-house.svg';
import SmallWinterHouse from '../images/map-marks/small-winter-house.svg';
import Sauna from '../images/map-marks/sauna.svg';
import WinterHouseWithSauna from '../images/map-marks/winter-house-with-sauna.svg';
import GuestHouse from '../images/map-marks/guest-house.svg';

import images04 from './houses/04';
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
// import images24 from './houses/24';
import images25 from './houses/25';
import images26 from './houses/26';
// import images27 from './houses/27';
import images27a from './houses/27a';
import images28 from './houses/28';
// import images30 from './houses/30';

export interface IHouse {
  title: string,
  type: HouseType,
  additionalType?: HouseType,
  mapMark: string | null,
  left?: number,
  top?: number,
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

const housesData: IHouse[] = [
  {
    title: '4',
    type: HouseType.WINTER_HOUSE,
    mapMark: WinterHouse,
    left: 133,
    top: 220,
    images: images04,
    annotation: 'Зимний/Летний дом',
    capacity: 12,
    description: `В аренду коттеджа включено:
    •	Каминный зал с ЖК-панелью
    •	Встроенная кухня с четырёхконфорочной электроплитой и мойкой
    •	Ванная комната (душевая, унитаз, биде, писуар)
    •	2-ой этаж - 3 комнаты по 2 места, обогреватель
    •	3-ий этаж - холл с двумя кроватями, ЖК-панель, комната - 2 места, комната - 3 места, обогреватель
    •	Чайник, микроволновка, холодильник
    •	Посуда: кастрюля, сковорода, тарелки, кружки, рюмки, приборы
    •	Кровати из массива дерева, ортопедические матрасы, одеяла, подушки, чистое постельное бельё
    •	Крытая веранда
    •	Мангальная зона, дрова`,
    cost: 14000,
    costName: CostNameType.PER_DAY,
  },
  {
    title: summerHouseAnnotation,
    type: HouseType.SUMMER_HOUSE,
    mapMark: null,
    images: [...images14, ...images16, ...images18],
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
    •	1 полутороспальная тахта на первом этаже
    •	2 туалета и отдельная душевая
    •	Встроенная кухня с плитой и раковиной
    •	Посуда
    •	Чайник, Микроволновка, холодильник
    •	ЖК-панель
    •	Ортопедический матрас, чистое постельное бельё, одеяло, плед, лицевые полотенца
    •	Мангальная зона, беседка, дрова
    •	Крытая веранда`,
    cost: 8000,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '13a',
    type: HouseType.SMALL_WINTER_HOUSE,
    additionalType: HouseType.WINTER_HOUSE,
    mapMark: SmallWinterHouse,
    left: 755,
    top: 116,
    images: images13a,
    annotation: 'Зимний/Летний дом',
    capacity: 3,
    description: `Двухэтажный шестиугольный дом из деревянного бруса с застеклённой верандой.

    В аренду коттеджа включено:
    •	1 спальня с 3 одноместными кроватями на втором этаже
    •	Печь
    •	Ванная с туалетом
    •	Встроенная кухня с плитой и раковиной
    •	Посуда
    •	Чайник, микроволновка, холодильник
    •	ЖК-панель
    •	Ортопедический матрас, постельное бельё, одеяло, плед, лицевые полотенца
    •	Мангальная зона, дрова
    •	Крытая веранда
    • Отдельных выход к озеру через понтон`,
    cost: 3500,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '13б',
    type: HouseType.SMALL_WINTER_HOUSE,
    additionalType: HouseType.WINTER_HOUSE,
    mapMark: SmallWinterHouse,
    left: 815,
    top: 116,
    images: images13b,
    annotation: 'Зимний/Летний дом',
    capacity: 3,
    description: `Двухэтажный шестиугольный дом из деревянного бруса с застеклённой верандой.

    В аренду коттеджа включено:
    •	1 спальня с 3 одноместными кроватями на втором этаже
    •	Печь
    •	Ванная с туалетом
    •	Встроенная кухня с плитой и раковиной
    •	Посуда
    •	Чайник, микроволновка, холодильник
    •	ЖК-панель
    •	Ортопедический матрас, постельное белье, одеяло, плед, лицевые полотенца
    •	Мангальная зона, дрова
    •	Крытая веранда
    • Отдельный выход к озеру через понтон`,
    cost: 3500,
    costName: CostNameType.PER_DAY,
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
    •	1 спальня с 4 одноместными кроватями – 1 этаж
    •	1 спальня с 3 одноместными кроватями и балконом – 2 этаж
    •	2 спальни с 2 одноместными кроватями – 2 этаж
    •	Ванная комната
    •	Туалет
    •	Встроенная кухня плитой и раковиной
    •	Печь
    •	Каминный зал
    •	Чайник, Микроволновка, холодильник
    •	Посуда
    •	ЖК-панель
    •	Матрас, постельное белье, одеяло, плед, лицевые полотенца
    •	Мангальная зона, зона отдыха, дрова`,
    cost: 12000,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '21',
    type: HouseType.WINTER_HOUSE,
    mapMark: WinterHouse,
    left: 629,
    top: 315,
    images: images21,
    annotation: 'Двухэтажный коттедж со сруба с печным отоплением с удобствами',
    capacity: 17,
    description: `В домике есть комнаты с ЖК-телевизорами, туалет с умывальником, ванная комната с умывальником, унитазом и биде, умывальник в коридоре.

    2 комнаты с двуспальными кровалями, 2 спальни с 4-мя односпальными кроватями, игровая зала с 4-мя спальными местами.

    Каминный зал со встроенной кухней. Каменная печь. Электрокамины.

    На первом этаже расположен банкетный зал на 22 места с камином и встроенной кухней (2 мойки, четырёхкомфорочная керамическая плита, микроволновка, холодильник, 2 электрочайника, посуда) с выходом на веранду.

    Перед домом мангальная зона со столом и скамейками.

    Крытая веранда.`,
    cost: 17000,
    costName: CostNameType.PER_DAY,
    additionally: 'Рядом с домом банька 21а за дополнительную плату 3.000 руб/полсуток',
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
    •	Душевая`,
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
    •	ЖК-панель
    •	Ортопедический матрас, постельное белье, одеяло, плед, лицевые полотенца
    •	Крытый дворик с зоной отдыха
    •	Мангальная зона, дрова`,
    cost: 9000,
    costName: CostNameType.PER_DAY,
    additionally: 'Зимой стоимость дома 7000 руб./сутки'
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
    •	Душевая`,
    cost: 4000,
    costName: CostNameType.PER_DAY_HALF,
  },
  {
    title: '23',
    type: HouseType.WINTER_HOUSE_WITH_SAUNA,
    additionalType: HouseType.WINTER_HOUSE,
    mapMark: WinterHouseWithSauna,
    left: 487,
    top: 96,
    images: images23,
    annotation: 'Зимний/Летний двухэтажный сруб с баней, с верандой и мангальной зоной',
    capacity: 6,
    description: `В аренду включено:
    •	Комната с 4 одноместными кроватями и 2 дивана
    •	Встроенная кухня с плитой и раковиной
    •	Чайник, Микроволновка, холодильник
    •	Посуда
    •	ЖК-панель
    •	Бильярд
    •	Ортопедический матрас, постельное белье, одеяло, плед, лицевые полотенца
    •	Крытая веранда

    Баня:
    •	Душевая кабина
    •	Туалет
    •	Парилка`,
    cost: 8000,
    costName: CostNameType.PER_DAY,
  },
  // {
  //   title: '24',
  //   type: HouseType.WINTER_HOUSE_WITH_SAUNA,
  //   additionalType: HouseType.WINTER_HOUSE,
  //   mapMark: WinterHouseWithSauna,
  //   left: 395,
  //   top: 132,
  //   images: images24,
  //   annotation: 'Летний дом с каменными печами',
  //   capacity: 11,
  //   description: `В аренду включено:
  //   •	2 спальни с 3 одноместными кроватями
  //   •	1 спальня с 2 одноместными кроватями
  //   •	В гостиной 2 дивана и одноместная кровать
  //   •	Мини-кухня с плиткой и раковиной
  //   •	Чайник, Микроволновка, холодильник
  //   •	Свежее постельное белье и полотенце
  //   •	Туалет на улице
  //   •	Мангальная зона, зона отдыха`,
  //   cost: 8000,
  //   costName: CostNameType.PER_DAY,
  // },
  {
    title: '25',
    type: HouseType.GUEST_HOUSE,
    mapMark: GuestHouse,
    left: 473,
    top: 144,
    images: images25,
    annotation: 'Летний трёхэтажный банкетный дом с отоплением, мангальной зоной и терассой',
    capacity: 30,
    description: `1 этаж – банкетный каминный зал на 50 мест со встроенной кухней
    2-3 этажи (отдельный вход с улицы) – спальные места на 30 гостей

    1 этаж:
    •	Каминный зал (до 50 посадочных мест)
    •	Большая кухня с островком  (2 плиты, 2 мойки)
    •	2 чайника, 2 микроволновки, холодильник
    •	Посуда
    •	2 туалета с умывальником

    2 этаж:
    •	4 комнаты по 2 места
    •	1 комната – 3 места
    •	1 комната – 4 места
    •	2 душевые с туалетами

    3 этаж:
    •	1 комната – 4 места
    •	1 комната – 5 мест
    •	1 комната – 6 мест
    •	2 туалета`,
    cost: 30000,
    costName: CostNameType.PER_DAY,
  },
  {
    title: '26',
    type: HouseType.WINTER_HOUSE_WITH_SAUNA,
    additionalType: HouseType.WINTER_HOUSE,
    mapMark: WinterHouseWithSauna,
    left: 600,
    top: 96,
    images: images26,
    annotation: 'Зимний/Летний двухэтажный сруб с баней, с верандой и мангальной зоной. Свой выход к озеру с понтоном',
    capacity: 8,
    description: `В аренду включено:
    •	Комната с 3 одноместными кроватями – 1 этаж
    •	Комната с 5 одноместными кроватями – 2 этаж, вход с улицы
    •	Зала со встроенной кухней с плитой и раковиной
    •	Чайник, микроволновка, холодильник
    •	Посуда
    •	Свежее постельное бельё и полотенца
    •	Крытая веранда

    Баня:
    •	Туалет
    •	Душевая кабина
    •	Парилка`,
    cost: 9000,
    costName: CostNameType.PER_DAY,
    additionally: 'При аренде только 1 этажа с баней и 3 спальными местами - 4000 руб./сутки'
  },
  // {
  //   title: '27',
  //   type: HouseType.SUMMER_HOUSE,
  //   additionalType: HouseType.SUMMER_HOUSE,
  //   mapMark: WinterHouseWithSauna,
  //   left: 150,
  //   top: 286,
  //   images: images27,
  //   annotation: 'Дом №27. Летний дом из сруба с баней, с верандой и мангальной зоной',
  //   capacity: 14,
  //   description: `В аренду включено:
  //   •	2 комнаты по 3 одноместных кровати
  //   •	1 комната с 4 одноместными кроватями
  //   •	Встроенная кухня с плитой и раковиной
  //   •	Диванная зона (3 дивана)
  //   •	Столовая
  //   •	Каменная печь с плитой
  //   •	Чайник, микроволновка, холодильник
  //   •	Свежее постельное бельё и полотенца
  //   •	Туалет на улице
  //   •	Крытая веранда

  //   Баня:
  //   •	Парилка
  //   •	Моечная`,
  //   cost: 9000,
  //   costName: CostNameType.PER_DAY,
  // },
  {
    title: '27а',
    type: HouseType.SAUNA,
    mapMark: Sauna,
    left: 150,
    top: 256,
    images: images27a,
    capacity: 5,
    description: `Одноэтажная на 5 гостей
    В аренду включено:
    •	Парилка
    •	Душевая`,
    cost: 4000,
    costName: CostNameType.PER_DAY_HALF,
  },
  {
    title: '28',
    type: HouseType.WINTER_HOUSE_WITH_SAUNA,
    additionalType: HouseType.WINTER_HOUSE,
    mapMark: WinterHouseWithSauna,
    left: 133,
    top: 167,
    images: images28,
    annotation: 'Зимний/Летний  двухэтажный дом',
    capacity: 4,
    description: `В аренду включено:
    •	Комната с 4 одноместными кроватями – 2 этаж
    •	Встроенная кухня с плитой и раковиной
    •	Печь
    •	Чайник, микроволновка, холодильник
    •	Ортопедический матрас, постельное бельё, одеяло, плед, лицевые полотенца
    •	Моечное отделение: душ, туалетная кабина
    •	Парилка
    •	Мангальная зона, зона отдыха
    •	Крытая веранда`,
    cost: 5000,
    costName: CostNameType.PER_DAY,
  },
  // {
  //   title: '30',
  //   type: HouseType.WINTER_HOUSE,
  //   mapMark: Sauna,
  //   left: 336,
  //   top: 147,
  //   images: images30,
  //   annotation: 'Двухместный тёплый домик',
  //   capacity: 2,
  //   description: `В аренду ключено:
  //   • 2 односпальные кровати
  //   • Печь
  //   • Холодильник, микроволновка, чайник, плитка, посуда
  //   • Пристроенная веранда
  //   • Мангальная зона, зона отдыха
  //   •	Крытая веранда`,
  //   cost: 2000,
  //   costName: CostNameType.PER_DAY,
  // },
];

export default housesData;
