import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [
    ProductsPageComponent
  ]
})
export class ProdutsModule { }
