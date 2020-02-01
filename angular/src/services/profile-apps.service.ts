import { Injectable } from '@angular/core';
import { WorkforceApplicationModel } from 'src/models/workforce-application.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileAppsService {

  constructor() { }

  apps: WorkforceApplicationModel[] = [
    { number: 1, name: 'Profile', route: 'profile' },
    { number: 2, name: 'My Requests', route: 'requests' },
  ]

}
