import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IphoneComponent } from './iphone/iphone.component';
import { LoginComponent } from './login/login.component';
import { OppoComponent } from './oppo/oppo.component';
import { ProductComponent } from './product/product.component';
import { RedmiComponent } from './redmi/redmi.component';
import { RegisterComponent } from './register/register.component';
import { SamsungComponent } from './samsung/samsung.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"product",component:ProductComponent
  },
  {
    path:"footer",component:FooterComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"cart",component:CartComponent
  },
  {
    path:"iphone",component:IphoneComponent
  },
  {
    path:"redmi",component:RedmiComponent
  },
  {
    path:"samsung",component:SamsungComponent
  },
  {
    path:"oppo",component:OppoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
