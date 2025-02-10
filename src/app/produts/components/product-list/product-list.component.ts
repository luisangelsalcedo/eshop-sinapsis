import { Component, Input, OnInit } from '@angular/core';
import { Category, Product } from '../../interfaces/product.interace';
import { ProductsService } from '../../services/products.service';
import { map, } from 'rxjs';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss',
    standalone: false
})

export class ProductListComponent implements OnInit {
    

    @Input()
    public category?:Category;
    public productByCategory: Product[] = [];
    constructor(private productsService:ProductsService) {}

    ngOnInit(): void {
        this.getProductByCategory();
        this.productByCategory = this.productsService.cacheStore.products;
    }

    getProductByCategory():void {
        this.productsService.getAllProducts()
        .pipe(
            map(products => products.filter(product => product.category === this.category))
        )
        .subscribe(response => {
            this.productByCategory = response
        })
    }

}