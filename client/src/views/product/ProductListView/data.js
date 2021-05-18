import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description:
      'Engie S.A. deține în portofoliu companiile Electrabel și Distrigaz Sud.',
    media: '/static/images/products/engie.png',
    title: 'Engie',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description:
      'Electrica S.A. este singura companie din România listată din domeniul distribuției și furnizării energiei electrice. ',
    media: '/static/images/products/electrica.png',
    title: 'Electrica',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description:
      'Digi Communications, cunoscut și sub numele de RCS & RDS, este un holding român de telecomunicații care operează în România.',
    media: '/static/images/products/digi.png',
    title: 'Digi',
    totalDownloads: '857'
  }
];
