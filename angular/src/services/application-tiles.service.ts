import { Injectable } from '@angular/core';
import { WorkforceApplicationTileModel } from 'src/models/wf-app-tile.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationTilesService {

  constructor() { }

  tiles: WorkforceApplicationTileModel[] = [
    { application: { number: 1, name: 'Edit Profile', route: 'profile' }, colour: 'lightblue' },
    { application: { number: 2, name: 'Submit Requests', route: 'requests' }, colour: 'lightgreen' },
    { application: { number: 3, name: 'File Complaints', route: 'complaints' }, colour: 'lightpink' },
    { application: { number: 4, name: 'Administration', route: 'admin' }, colour: 'lightyellow' }
  ]
}
