import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsHomeComponent } from './forms-home/forms-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsHomeComponent
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
