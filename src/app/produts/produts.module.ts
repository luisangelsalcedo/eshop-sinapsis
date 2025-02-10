import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartButtonComponent } from './components/shopping-cart-button/shopping-cart-button.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductCardComponent,
    ShoppingCartButtonComponent,
    AddToCartButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
],
  exports: [
    ProductsPageComponent,
    ShoppingCartButtonComponent,
    ProductPageComponent
  ]
})
export class ProdutsModule { }
