import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/interfaces/products';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor( private _ProductsService:ProductsService, private _CartService:CartService  ){}

  products:Products [] = []

  ngOnInit(): void {
      this._ProductsService.getAllProducts().subscribe({
        next:(response)=>{
          console.log(response);
          this.products = response
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
  }


  addToCart(productId:number){
    let objectToAddProduct:any = {
      userId: 5,
      products: {
        productId: productId,
        quantity: 1
      }
    }


    this._CartService.addToCart(objectToAddProduct).subscribe({
      next:(response)=>{
        console.log(response);
        
      }
    })
  }






}
