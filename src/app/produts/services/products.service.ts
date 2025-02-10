import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, Product } from '../interfaces/product.interace';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductsService {

    private apiUrl:string = 'https://fakestoreapi.com/products';

    constructor(private http: HttpClient) { }

    
    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl)
    }


    getAllCategories(): Observable<Category[]> {
        const url = `${this.apiUrl}/categories`
        return this.http.get<Category[]>(url)
    }
    
}