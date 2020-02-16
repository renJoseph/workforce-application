import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatOptionModule } from '@angular/material/core';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    ViewUserComponent,
    CreateUserComponent
  ],
  imports: [
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatOptionModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
