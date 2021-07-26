import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from './product-interface';
import { Cart } from './cart-interface';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class Service {
  BACKEND_ROUTE = 'http://localhost:4000/api/';

  constructor (
    private http: HttpClient
  ) {}

  addToCart(url: String, body: Cart): Observable<any> {
    return this.http.post<any>(this.BACKEND_ROUTE + url, body)
  }

  retrieveCart(url: String): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.BACKEND_ROUTE + url)
  }

  getProductList(url : String): Observable<Product[]> {
    return this.http.get<Product[]>(this.BACKEND_ROUTE + url)
  }

  searchProduct(url : String): Observable<Product[]> {
    return this.http.get<Product[]>(this.BACKEND_ROUTE + url)
  }

  getProductById(url : String): Observable<Product> {
    console.log(url)
    return this.http.get<Product>(this.BACKEND_ROUTE + url)
  }

  updateCart(url: String, body: any): Observable<any> {
    return this.http.post<any>(this.BACKEND_ROUTE + url, body)
  }

  deleteCart(url: String, body: any): Observable<any> {
    return this.http.post<any>(this.BACKEND_ROUTE + url, body)
  }
}
