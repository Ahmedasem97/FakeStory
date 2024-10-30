import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { CartComponent } from './components/cart/cart.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './shared/guards/auth.guard';
import { authLogOUtGuard } from './shared/guards/auth-log-out.guard';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {path:"" , canActivate:[authGuard] ,component:BlankLayoutComponent, children:[
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"categories/:cate", component:CategoriesComponent},
    {path:"details/:id", component:DetailsComponent},
    {path:"cart", component:CartComponent},
    {path:"wishList", component:WishListComponent},
    {path:"products", component:ProductsComponent},
  ]},


  {path:"", canActivate: [authLogOUtGuard] ,component:AuthLayoutComponent, children:[
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent}
  ]},

  {path:"**", component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
