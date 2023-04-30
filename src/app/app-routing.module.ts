import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ShowdestinationComponent } from './pages/showdestination/showdestination.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DestinationdetailsComponent } from './pages/destinationdetails/destinationdetails.component';




const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  // { path: '**', component: LoginComponent },
  { path: 'showdestination', component: ShowdestinationComponent },
  { path: 'destinationdetails', component: DestinationdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
