import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('../../projects/core/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: "admin",
    loadChildren: () => import('../../projects/admin/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: "profile",
    loadChildren: () => import('../../projects/profile/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: "complaints",
    loadChildren: () => import('../../projects/complaints/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: "requests",
    loadChildren: () => import('../../projects/requests/src/app/app.module').then(m => m.AppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
