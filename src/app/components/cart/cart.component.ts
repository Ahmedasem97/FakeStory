import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor(
    private _CartService:CartService
  ){}

  getAllCart:any[] = []


  ngOnInit(): void {
      this._CartService.getAllCart().subscribe({
        next:(respone)=>{
          this.getAllCart = respone
        }
      })
  }


  



}
