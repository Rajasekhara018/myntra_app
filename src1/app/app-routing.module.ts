import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { Scree1Component } from './scree1/scree1.component';

const routes: Routes = [
  {path:'',component:Scree1Component},
  {path:'data', component:DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
