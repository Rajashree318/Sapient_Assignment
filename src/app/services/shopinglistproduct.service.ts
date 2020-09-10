import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ShopinglistproductService {
    constructor(private http:HttpClient) { }
    getProducts(API_URL):Observable<Product[]>{
      return this.http.get<Product[]>(API_URL);
    }
  }
  