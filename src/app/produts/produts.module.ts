import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products-page/products-page.component';



@NgModule({
  declarations: [
    ProductsPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsPageComponent
  ]
})
export class ProdutsModule { }
