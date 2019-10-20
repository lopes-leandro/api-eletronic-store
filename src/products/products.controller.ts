import { Get, Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import * as _ from 'lodash';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): any {
    return this.productsService.findAll().then(products => {
      return products.map(product => _.omit(product.toJSON(), ['sales']));
    });
  }
}
