import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, Product } from '../interfaces/product.interace';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductsService {

    private apiUrl:string = 'https://fakestoreapi.com/products';
    public cart:Product[] = [];

    constructor(private http: HttpClient) { }

    
    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl)
    }

    getProductById(id:string): Observable<Product> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Product>(url)
    }

    getAllCategories(): Observable<Category[]> {
        const url = `${this.apiUrl}/categories`
        return this.http.get<Category[]>(url)
    }

    addToShoppingCart(product:Product){
        this.cart.push(product);
    }

    removeToShoppingCart(product:Product){
         this.cart = this.cart.filter(({id}) => id != product.id);
    }
    
}