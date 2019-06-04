import { TestBed } from '@angular/core/testing';

import { OngApiService } from './ong-api.service';

describe('OngApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OngApiService = TestBed.get(OngApiService);
    expect(service).toBeTruthy();
  });
});
