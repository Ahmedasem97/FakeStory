import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/app/shared/interfaces/category';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Products } from 'src/app/shared/interfaces/products';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _CategoriesService: CategoriesService,
    private _ProductsService: ProductsService,
    private _CartService: CartService,
    private _ToastrService:ToastrService
  ) { }

  categories: Category[] = []
  products: Products[] = []



  ngOnInit(): void {
    this._CategoriesService.getCategories().subscribe({
      next: (response) => {
        console.log(response);
        this.categories = response
      },
      error: (err) => {
        console.log(err);

      }
    })


    this._ProductsService.getLimitedProdect().subscribe({
      next: (response) => {
        console.log(response);
        this.products = response

      },
      error: (err) => {
        console.log(err);

      }
    })


  }



  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 3000,
  }


  arrows: string[] = ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']

  featuredCategories: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: this.arrows,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 2500,
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
