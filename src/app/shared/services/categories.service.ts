import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient: HttpClient) { }

  getCategories():Observable<any> {
    return this._HttpClient.get('https://fakestoreapi.com/products/categories')
  }


  getSpecificCategories(category:string):Observable<any> {
    return this._HttpClient.get(`https://fakestoreapi.com/products/category/${category}`)
  }
  

}
