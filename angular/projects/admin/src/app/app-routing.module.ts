import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  {
    path: "",
    component: AdminHomeComponent
  },
  {
    path: "create",
    component: CreateUserComponent
  },
  {
    path: "view",
    component: ViewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
