import { TestBed } from '@angular/core/testing';

import { ApiservciesService } from './apiservcies.service';

describe('ApiservciesService', () => {
  let service: ApiservciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiservciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
