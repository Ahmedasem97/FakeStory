import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/shared/interfaces/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private _ProductsService: ProductsService, private _ActivatedRoute:ActivatedRoute) { }


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
}
