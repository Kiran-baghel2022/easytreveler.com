import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './pages/admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { ShowdestinationComponent } from './pages/showdestination/showdestination.component';
import { DestinationdetailsComponent } from './pages/destinationdetails/destinationdetails.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
//import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    FooterComponent,
    ShowdestinationComponent,
    DestinationdetailsComponent,
    HotelsComponent,
    
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
