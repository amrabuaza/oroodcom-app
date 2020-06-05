import { TestBed } from '@angular/core/testing';

import { SearchItemsByIdService } from './search-items-by-id.service';

describe('SearchItemsByIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchItemsByIdService = TestBed.get(SearchItemsByIdService);
    expect(service).toBeTruthy();
  });
});
