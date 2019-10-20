import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {Category} from '../../models/Category';
import {ProductService} from '../../services/product.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[];
  categories: Category[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}

