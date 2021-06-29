import { TestBed } from '@angular/core/testing';

import { ApiThirukkuralService } from './api-thirukkural.service';

describe('ApiThirukkuralService', () => {
  let service: ApiThirukkuralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiThirukkuralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
