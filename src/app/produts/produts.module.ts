import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartButtonComponent } from './components/shopping-cart-button/shopping-cart-button.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductListComponent,
    ProductCardComponent,
    ShoppingCartButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [
    ProductsPageComponent,
    ShoppingCartButtonComponent
  ]
})
export class ProdutsModule { }
