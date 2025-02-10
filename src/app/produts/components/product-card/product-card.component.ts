import { ProductsService } from '../../services/products.service';
import { Product } from './../../interfaces/product.interace';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'product-card',
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.scss',
    standalone: false
})

export class ProductCardComponent implements OnInit{
    
    @Input()
    public product?:Product;
    public hasLoaded:boolean = false;

    constructor(private productsService:ProductsService){}
    
    ngOnInit(): void {
        if(!this.product) throw new Error('Product property is required');
    }

    onLoad(){
        this.hasLoaded = true
    }

    addToCart(product?:Product){
        if(!product) return;
        this.productsService.addToShoppingCart(product);
    }
}