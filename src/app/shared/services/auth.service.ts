import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }

  decodeToken:string = ''
  userToken (){
    if (localStorage.getItem('eToken') != null ){
      let encodeToken:any = localStorage.getItem('eToken')
      this.decodeToken = jwtDecode(encodeToken)
    }
  }


  registerApi(userData:object): Observable<any> {
    return this._HttpClient.post('https://fakestoreapi.com/users', userData)
  }
  
  
  loginApi(userData:object): Observable<any> {
    return this._HttpClient.post('https://fakestoreapi.com/auth/login', userData)
  }





}
