import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './components/admin-home/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
