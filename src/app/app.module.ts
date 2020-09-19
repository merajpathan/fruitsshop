import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';








@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    routingComponents,
    ProductComponent,
    ShoppingcartComponent
  
  
   
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
