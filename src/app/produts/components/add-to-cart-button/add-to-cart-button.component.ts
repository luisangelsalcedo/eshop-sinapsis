import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interace';

@Component({
    selector: 'add-to-cart-button',
    templateUrl: './add-to-cart-button.component.html',
    styleUrl: './add-to-cart-button.component.scss',
    standalone: false
})

export class AddToCartButtonComponent  {
    
    @Input()
    public product?:Product;
    constructor(private productsService:ProductsService) { }

    addToCart(product?:Product){
        if(!product) return;
        this.productsService.addToShoppingCart(product);
    }
}