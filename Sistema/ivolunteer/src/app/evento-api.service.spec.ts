import { TestBed } from '@angular/core/testing';

import { EventoApiService } from './evento-api.service';

describe('EventoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventoApiService = TestBed.get(EventoApiService);
    expect(service).toBeTruthy();
  });
});
