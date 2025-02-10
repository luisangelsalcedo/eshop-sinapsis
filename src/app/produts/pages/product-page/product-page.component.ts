import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interace';

@Component({
    selector: 'selector-name',
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.scss',
    standalone: false
})

export class ProductPageComponent implements OnInit {

    public product?:Product;

    constructor(
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsService,
        private router:Router
    ) { }

    ngOnInit() { 
        this.activatedRoute.params
        .pipe(
            switchMap(({id})=> this.productsService.getProductById(id))
        )
        .subscribe((response) => {
            if(!response) return this.router.navigateByUrl('products')
            this.product = response;
            return 
        })
            
            
    }
}