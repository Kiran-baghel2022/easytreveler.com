import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SubskartComponent } from './subskart/subskart.component';
import { VenderComponent } from './vender/vender.component';
import { ItemComponent } from './item/item.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { VendoritemselectionComponent } from './vendoritemselection/vendoritemselection.component';
import { ShowdestinationComponent } from './showdestination/showdestination.component';



const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'subskart', component: SubskartComponent },
  { path: 'vender', component: VenderComponent },
  { path: 'additem', component: ItemComponent },
  { path: 'item', component: ItemlistComponent },
  { path: 'vendoritemselection', component: VendoritemselectionComponent },
  { path: 'admin', component: AdminComponent },
  // { path: '**', component: LoginComponent },
  { path: 'showdestination', component: ShowdestinationComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
