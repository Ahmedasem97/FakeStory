import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  constructor( private _CategoriesService:CategoriesService,private _CartService:CartService, private _ActivatedRoute:ActivatedRoute ){}

  cateProducts:any[] = [];
  categoryIs:string = ''


  ngOnInit(): void {
    let paramCate:any;

    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        paramCate = param.get('cate')
      }
    })

    this._CategoriesService.getSpecificCategories(paramCate).subscribe({
      next:(response)=>{
        console.log(response);
        this.cateProducts = response
        this.categoryIs = response[0].category
        console.log(response[0].category);
        
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
