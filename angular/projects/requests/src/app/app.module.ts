import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestsHomeComponent } from './requests-home/requests-home.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestsHomeComponent
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
