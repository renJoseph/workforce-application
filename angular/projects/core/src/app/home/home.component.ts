import { Component } from '@angular/core';
import { ApplicationTilesService } from 'src/services/application-tiles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public appTileService: ApplicationTilesService
  ) { }

  ngOnInit() {
  }

}
