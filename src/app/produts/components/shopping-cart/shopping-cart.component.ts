import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interace';

@Component({
    selector: 'shopping-cart',
    templateUrl: 'shopping-cart.component.html',
    styleUrl: 'shopping-cart.component.scss',
    standalone: false
})


export class ShoppingCart implements OnInit{
    constructor(private productService: ProductsService) { }

    ngOnInit(): void {
        console.log(this.productService.cartObject)
    }

    get cartObjectKeys(){
        return Object.keys(this.productService.cartObject)
    }
    get cartObject(){
        return this.productService.cartObject
    }


}