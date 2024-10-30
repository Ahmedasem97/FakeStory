import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _FormBuilder: FormBuilder , private _AuthService:AuthService , private _Router:Router) { }

  registerForm: FormGroup = this._FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    password: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]],
    name: this._FormBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    }),
    address: this._FormBuilder.group({
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      street: ['', [Validators.required, Validators.minLength(3)]],
      number: ['', [Validators.required]],
      zipcode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      geolocation: this._FormBuilder.group({
        lat: ['', [Validators.required, Validators.minLength(3)]],
        long: ['', [Validators.required, Validators.minLength(3)]],
      }),
    }),
    phone: ['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
  });

  responseError:string = ''

  spinner:boolean = false
  
  registerBtn(): void {  
    this.spinner = true      
    this._AuthService.registerApi(this.registerForm.value).subscribe({
      next:(response)=>{
        console.log(response);
        this.spinner = false
        this._Router.navigate(['/login'])
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        
        this.spinner = false
        this.responseError = err.error.message
      }
    })
    
  }
}
