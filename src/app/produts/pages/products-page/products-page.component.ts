import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interace';

@Component({
    selector: 'products-page',
    templateUrl: './products-page.component.html',
    standalone: false
})

export class ProductsPageComponent implements OnInit {

    public products: Product[] = [];
    constructor(private productsService:ProductsService){}
    
    ngOnInit(): void {
        this.getProducts()
    }

    getProducts():void{
        this.productsService.getAllProducts()
            .subscribe( response => {
                this.products = response
            } 
        )
    }
}