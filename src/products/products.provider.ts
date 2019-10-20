import { Connection } from 'mongoose';
import { ProductsSchema } from '../schemas/produt.schema';

export const productsProviders = [
  {
    provide: 'ProductsModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Products', ProductsSchema),
    inject: ['DbConnectionToken'],
  },
];