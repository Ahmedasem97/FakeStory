import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient: HttpClient , private _AuthService:AuthService) { }

  addToCart (productId:object):Observable<any> {
    return this._HttpClient.post('https://fakestoreapi.com/carts',productId )
    }


  getAllCart():Observable<any> {
    return this._HttpClient.get('https://fakestoreapi.com/carts')
    }


  deleteCart():Observable<any> {
    return this._HttpClient.delete('https://fakestoreapi.com/carts/5')
    }

}
