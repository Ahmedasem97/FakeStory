import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit{
  constructor(private _Router: Router) { }

  logOut() {
    localStorage.removeItem('eToken')
    this._Router.navigate(['/login'])
  }


  isScrolling:boolean = false

  ngOnInit(): void {
      window.addEventListener('scroll', ()=>{
        if(window.scrollY > 50){
          this.isScrolling = true
        }else {
          this.isScrolling = false
        }
      })
  }

}
