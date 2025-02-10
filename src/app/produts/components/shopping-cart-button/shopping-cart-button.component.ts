import { Product } from './../../interfaces/product.interace';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'shopping-cart-button',
    templateUrl: './shopping-cart-button.component.html',
    styleUrl: './shopping-cart-button.component.scss',
    standalone: false
})

export class ShoppingCartButtonComponent  {
    public isOpen:boolean = false;
    constructor(private productsService:ProductsService) {}

    get cart():Product[]{
        return this.productsService.cart
    }

    openModal(){
        this.isOpen = true;
    }
 
    openModalToFalse(open:boolean){
        this.isOpen = open,
        console.log(this.productsService.cartObject)
    }



}