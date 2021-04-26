import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    provider: 'Electrica',
    amount: '252',
    net: '320',
    createdAt: 1555016400000,
    status: 'paid',
    barcode: uuid(),
    optional: ''
  },
  {
    id: uuid(),
    provider: 'Distrigaz',
    amount: '348',
    net: '450',
    createdAt: 1555016400000,
    status: 'pedding',
    barcode: uuid(),
    barcode: uuid(),
    optional: ''
  }
];
