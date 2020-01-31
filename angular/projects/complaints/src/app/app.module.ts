import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplaintsHomeComponent } from './complaints-home/complaints-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintsHomeComponent
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
