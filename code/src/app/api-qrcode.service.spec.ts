import { TestBed } from '@angular/core/testing';

import { ApiQrcodeService } from './api-qrcode.service';

describe('ApiQrcodeService', () => {
  let service: ApiQrcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiQrcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
