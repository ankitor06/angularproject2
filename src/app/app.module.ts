import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { ChildproductComponent } from './childproduct/childproduct.component';
import { CartComponent } from './cart/cart.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { RedmiComponent } from './redmi/redmi.component';
import { SamsungComponent } from './samsung/samsung.component';
import { OppoComponent } from './oppo/oppo.component';
import { IphoneComponent } from './iphone/iphone.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    RegisterComponent,
    ChildproductComponent,
    CartComponent,
    RedmiComponent,
    SamsungComponent,
    OppoComponent,
    IphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
