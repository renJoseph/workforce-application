import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsHomeComponent } from './forms-home/forms-home.component';


const routes: Routes = [
  {
    path: "",
    component: FormsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
