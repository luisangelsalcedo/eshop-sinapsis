import { Category, Product } from "./product.interace";

export interface CacheStores{
    products:      Product[],
    categories:    Category[],
    cart:          any,
}