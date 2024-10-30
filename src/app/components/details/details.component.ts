import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/shared/interfaces/products';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private _ProductsService: ProductsService, private _ActivatedRoute:ActivatedRoute, private _CartService:CartService , private _ToastrService: ToastrService) { }


  SpecificProduct:Products = {} as Products

  ngOnInit(): void {
    let paramId:any ;
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        paramId = param.get('id')
      }
    })

    this._ProductsService.getSpecificProduct(paramId).subscribe({
      next: (response) => {
        console.log(response);
        this.SpecificProduct = response
      }
    })
  }




  addToCart(productId: number) {
    let objectToAddProduct: any = {
      userId: 5,
      products: {
        productId: productId,
        quantity: 1
      }
    }


    this._CartService.addToCart(objectToAddProduct).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success('this product added to your cart')
      },
      error:(err)=>{
        this._ToastrService.warning('try again')
      }
    })
  }




}
