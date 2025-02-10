import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsPageComponent
  ]
})
export class ProdutsModule { }
