import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileHomeComponent } from './components/profile-home/profile-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileHomeComponent
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
