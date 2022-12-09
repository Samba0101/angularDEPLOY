import { TestBed } from '@angular/core/testing';

import { RatifyService } from './ratify.service';

describe('RatifyService', () => {
  let service: RatifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
