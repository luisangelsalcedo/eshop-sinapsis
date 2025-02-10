import { Product } from "./product.interace";

export interface ShoppingCart{
    [id: string]: Response
}

export interface Response {
    count:       number;
    title:       string;
    price:       number;
    category:    string;
    description: string;
    image:       string;
}