import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SubskartComponent } from './subskart/subskart.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { VenderComponent } from './vender/vender.component';
import { ItemComponent } from './item/item.component';
import { AdminComponent } from './admin/admin/admin.component';
import { FooterComponent } from './footer/footer.component';

import { ItemlistComponent } from './itemlist/itemlist.component';
import { VendoritemselectionComponent } from './vendoritemselection/vendoritemselection.component';
import { ShowdestinationComponent } from './showdestination/showdestination.component';
//import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SubskartComponent,
    VenderComponent,
    ItemComponent,
    AdminComponent,
    FooterComponent,
    ItemlistComponent,
    VendoritemselectionComponent,
    ShowdestinationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
