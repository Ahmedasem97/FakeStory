import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _FormBuilder: FormBuilder , private _AuthService:AuthService , private _Router:Router) { }

  loginForm: FormGroup = this._FormBuilder.group({
    username: ['', [Validators.required , Validators.minLength(3), Validators.maxLength(15)]],
    password: ['', [Validators.required]],
  });

  responseError:string = ''

  spinner:boolean = false
  
  loginBtn(): void {  
    this.spinner = true  
    this._AuthService.loginApi(this.loginForm.value).subscribe({
      next:(response)=>{
        this.spinner = false
        localStorage.setItem('eToken', response.token)

        this._Router.navigate(['/home'])
      },
      error:(err:HttpErrorResponse)=>{  
        console.log(err);
              
        this.spinner = false
        this.responseError = err.error.message
      }
    })
    
  }
}
