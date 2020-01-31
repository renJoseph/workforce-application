import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsHomeComponent } from './requests-home/requests-home.component';


const routes: Routes = [
  {
    path: "",
    component: RequestsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
