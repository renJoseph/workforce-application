import { Component } from '@angular/core';
import { ApplicationsService } from 'src/services/applications.service';
import { ProfileAppsService } from 'src/services/profile-apps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular';

  constructor(
    public appService: ApplicationsService,
    public profileAppService: ProfileAppsService
  ) { }
}
