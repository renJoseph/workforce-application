import { Injectable } from '@angular/core';
import { WorkforceApplicationModel } from 'src/models/workforce-application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor() { }

  apps: WorkforceApplicationModel[] = [
    { number: 2, name: 'Submit Request', route: 'forms' },
    { number: 3, name: 'File Complaints', route: 'complaints' },
    { number: 4, name: 'Administration', route: 'admin' }
  ]

}
