import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {MainPageComponent} from "./componets/main-page/main-page.component";

const routes: Routes = [

  {path:'', component: HomeComponent ,children:[
    { path: '', redirectTo: 'main-page' , pathMatch: 'full' },
      {path:'main-page', component: MainPageComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
