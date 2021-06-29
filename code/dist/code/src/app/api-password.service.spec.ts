import { TestBed } from '@angular/core/testing';

import { ApiPasswordService } from './api-password.service';

describe('ApiPasswordService', () => {
  let service: ApiPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
