import { Injectable } from '@angular/core';

import { products } from '../../../../mocks/products'
import Product from '../../product.model';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ProductsService {
    private api:string = environment.api;
    private endpoint:string = 'products';

    constructor(
        private http: HttpClient
    ) {}

    getProducts(){
        const URL:string = `${this.api}/${this.endpoint}`
        return this.http.get(URL);            
    }

    getProduct(id: number){
        // const prod = this.products.filter(prod => prod.id === id);
        // return prod[0];
        const URL:string = `${this.api}/${this.endpoint}/${id}`;
        //console.log(URL);
        return this.http.get(URL); 
    }

    deleteProduct(id: number){
        const URL:string = `${this.api}/${this.endpoint}/${id}`
        return this.http.delete(URL);
        // this.products = this.products.filter(prod => prod.id !== id);        
        //return this.products;
    }
}