interface INavTitle {
  path: string,
  title: string,
}

export const main: INavTitle = {
  path: '/',
  title: 'О нас',
};

export const plan: INavTitle = {
  path: '/plan',
  title: 'Размещение',
};

export const houses: INavTitle = {
  path: '/houses',
  title: 'Домики',
};

export const map: INavTitle = {
  path: '/map',
  title: 'Расположение клуба',
};
