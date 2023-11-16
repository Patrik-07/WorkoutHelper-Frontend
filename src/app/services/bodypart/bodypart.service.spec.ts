import { TestBed } from '@angular/core/testing';

import { BodypartService } from './bodypart.service';

describe('BodypartService', () => {
  let service: BodypartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodypartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
