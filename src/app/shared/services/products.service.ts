import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient: HttpClient) { }

  baseUrl: string = 'https://fakestoreapi.com/products'

  getAllProducts(): Observable<any> {
    return this._HttpClient.get(this.baseUrl)
  }
  
  getLimitedProdect():Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}?limit=8`)

  }
  getSpecificProduct(productId:string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/${productId}`)
  }

  
  getSingleProduct(productId:number):Observable<any> {
    return this._HttpClient.get(`https://fakestoreapi.com/products/${productId}`)
    }

}
