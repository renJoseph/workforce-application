import { TestBed } from '@angular/core/testing';

import { ProfileAppsService } from './profile-apps.service';

describe('ProfileAppsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileAppsService = TestBed.get(ProfileAppsService);
    expect(service).toBeTruthy();
  });
});
