import { TestBed } from '@angular/core/testing';

import { CategotyService } from './categoty.service';

describe('CategotyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategotyService = TestBed.get(CategotyService);
    expect(service).toBeTruthy();
  });
});
