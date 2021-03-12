import { TestBed } from '@angular/core/testing';

import { ServiceIdentificationService } from './service-identification.service';

describe('ServiceIdentificationService', () => {
  let service: ServiceIdentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceIdentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
