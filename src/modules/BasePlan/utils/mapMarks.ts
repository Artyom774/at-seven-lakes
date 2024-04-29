import SummerHouse from '../images/summer-house.svg';
import WinterHouse from '../images/winter-house.svg';
import SmallWinterHouse from '../images/small-winter-house.svg';
import Sauna from '../images/sauna.svg';
import WinterHouseWithSauna from '../images/winter-house-with-sauna.svg';
import GuestHouse from '../images/guest-house.svg';

interface legendPointsProp {
  caption: string,
  type: string,
  left: number,
  top: number,
}

const mapMarks: legendPointsProp[] = [
  {
    caption: '4',
    type: WinterHouse,
    left: 135,
    top: 222,
  },
  {
    caption: '6',
    type: SummerHouse,
    left: 276,
    top: 227,
  },
  {
    caption: '7',
    type: WinterHouse,
    left: 336,
    top: 229,
  },
  {
    caption: '9',
    type: SummerHouse,
    left: 213,
    top: 186,
  },
  {
    caption: '10',
    type: SummerHouse,
    left: 276,
    top: 186,
  },
  {
    caption: '11',
    type: SummerHouse,
    left: 336,
    top: 186,
  },
  {
    caption: '13a',
    type: SmallWinterHouse,
    left: 755,
    top: 116,
  },
  {
    caption: '13б',
    type: SmallWinterHouse,
    left: 815,
    top: 116,
  },
  {
    caption: '14',
    type: SummerHouse,
    left: 764,
    top: 277,
  },
  {
    caption: '15',
    type: SummerHouse,
    left: 820,
    top: 234,
  },
  {
    caption: '16',
    type: SummerHouse,
    left: 818,
    top: 281,
  },
  {
    caption: '17',
    type: SummerHouse,
    left: 845,
    top: 326,
  },
  {
    caption: '18',
    type: SummerHouse,
    left: 776,
    top: 334,
  },
  {
    caption: '20',
    type: WinterHouse,
    left: 558,
    top: 315,
  },
  {
    caption: '21',
    type: WinterHouse,
    left: 629,
    top: 315,
  },
  {
    caption: '21а',
    type: Sauna,
    left: 710,
    top: 316,
  },
  {
    caption: '22',
    type: WinterHouse,
    left: 646,
    top: 374,
  },
  {
    caption: '22а',
    type: Sauna,
    left: 615,
    top: 356,
  },
  {
    caption: '23',
    type: WinterHouseWithSauna,
    left: 487,
    top: 96,
  },
  {
    caption: '24',
    type: WinterHouseWithSauna,
    left: 395,
    top: 132,
  },
  {
    caption: '25',
    type: GuestHouse,
    left: 473,
    top: 144,
  },
  {
    caption: '26',
    type: WinterHouseWithSauna,
    left: 600,
    top: 96,
  },
  {
    caption: '27',
    type: WinterHouseWithSauna,
    left: 150,
    top: 286,
  },
  {
    caption: '28',
    type: WinterHouseWithSauna,
    left: 133,
    top: 167,
  },
  {
    caption: '30',
    type: Sauna,
    left: 336,
    top: 147,
  },
];

export default mapMarks;
