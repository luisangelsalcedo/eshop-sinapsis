import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, Product } from '../interfaces/product.interace';
import { count, Observable, tap } from 'rxjs';
import { CacheStores } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})
export class ProductsService{

    private apiUrl:string = 'https://fakestoreapi.com/products';
    public cart:Product[] = [];

    public cacheStore:CacheStores = {
        products:      [],
        categories:    [],
        cart:          [],
    }

    constructor(private http: HttpClient) { 
        this.loadLocalStorage();
    }
    
    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl).pipe(
            tap( products => this.cacheStore.products = [...products]),
            tap( () => this.saveLocalStorage())
        )
    }

    getProductById(id:string): Observable<Product> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Product>(url)
    }

    getAllCategories(): Observable<Category[]> {
        const url = `${this.apiUrl}/categories`
        return this.http.get<Category[]>(url).pipe(
            tap( categories => this.cacheStore.categories = [...categories]),
            tap( () => this.saveLocalStorage())
        )
    }

    addToShoppingCart(product:Product){
        this.cart.push(product);
    }

    removeToShoppingCart(product:Product){
         this.cart = this.cart.filter(({id}) => id != product.id);
    }

    get cartObject(){
        return this.cart.reduce((acc, product) => {
            const { id, title, price, category, description, image } = product;
          
            if (!acc[id]) {
              acc[id] = {
                count: 0,
                title,
                price,
                category,
                description,
                image,
              };
            }
          
            acc[id].count += 1;
          
            return acc;
          }, {} as Record<number, { count: number; title: string; price: number; category: string; description: string; image: string }>);
    }
    
    private saveLocalStorage(){
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
    }

    private loadLocalStorage(){
        if(!localStorage.getItem('cacheStore')) return;
        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
    }
}