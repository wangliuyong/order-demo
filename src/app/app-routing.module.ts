import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';


const routes: Routes = [
 {path:'home',component:HomeComponent},
 {path:'detail',component:StoreDetailComponent},
 {path:'**',redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
