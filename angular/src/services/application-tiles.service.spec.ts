import { TestBed } from '@angular/core/testing';

import { ApplicationTilesService } from './application-tiles.service';

describe('ApplicationTilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationTilesService = TestBed.get(ApplicationTilesService);
    expect(service).toBeTruthy();
  });
});
