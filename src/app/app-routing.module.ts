import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import * as fromProducts from './products';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'products',
    children: [
      {path: '', component: fromProducts.ProductListComponent, pathMatch: 'full'},
      {path: 'add', component: fromProducts.ProductAddComponent},
      {path: 'edit/:product_id', component: fromProducts.ProductEditComponent},
      {path: ':product_id', component: fromProducts.ProductDetailComponent}
    ]
  },
];

@NgModule({
  exports: [RouterModule],
  providers: [],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
