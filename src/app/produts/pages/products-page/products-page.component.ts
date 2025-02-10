import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Category } from '../../interfaces/product.interace';

@Component({
    selector: 'products-page',
    templateUrl: './products-page.component.html',
    standalone: false
})

export class ProductsPageComponent implements OnInit {

    public categories: Category[] = [];
    constructor(private productsService:ProductsService){}
    
    ngOnInit(): void {
        this.getCategories()
        this.categories = this.productsService.cacheStore.categories;
    }

    getCategories():void{
        this.productsService.getAllCategories()
            .subscribe( response => {
                this.categories = response
            })
    }
}