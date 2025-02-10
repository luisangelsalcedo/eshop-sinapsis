import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interace';

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
    
    ngOnInit(): void {
        if(!this.product) throw new Error('Product property is required');
    }

    onLoad(){
        console.log('cargo')
        this.hasLoaded = true
    }
}