import {Category} from './Category';

export interface Product {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  price?: number;
  sku?: string;
  category?: Category;
}
