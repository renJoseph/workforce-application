import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintsHomeComponent } from './complaints-home/complaints-home.component';

const routes: Routes = [
  {
    path: "",
    component: ComplaintsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
