import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './produts/pages/products-page/products-page.component';
import { ProductPageComponent } from './produts/pages/product-page/product-page.component';

const routes: Routes = [
  {
    path: "products",
    component: ProductsPageComponent
  },
  {
    path: "product/:id",
    component: ProductPageComponent
  },
  {
    path: "**",
    redirectTo: "products"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
