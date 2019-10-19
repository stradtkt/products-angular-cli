import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import * as fromProducts from './products';
import * as fromCategories from './categories';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'products', component: fromProducts.ProductListComponent},
  {path: 'products/add', component: fromProducts.ProductAddComponent},
  {path: 'products/:product_id/edit', component: fromProducts.ProductEditComponent},
  {path: 'products/:product_id', component: fromProducts.ProductDetailComponent},
  {path: 'categories', component: fromCategories.CategoryListComponent},
  {path: 'categories/add', component: fromCategories.CategoryAddComponent},
  {path: 'categories/:cat_id/edit', component: fromCategories.CategoryEditComponent},
  {path: 'categories/:cat_id', component: fromCategories.CategoryDetailComponent}
];

@NgModule({
  exports: [RouterModule],
  providers: [],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
