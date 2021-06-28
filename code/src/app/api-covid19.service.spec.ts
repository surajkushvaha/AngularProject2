import { TestBed } from '@angular/core/testing';

import { ApiCovid19Service } from './api-covid19.service';

describe('ApiCovid19Service', () => {
  let service: ApiCovid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCovid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
