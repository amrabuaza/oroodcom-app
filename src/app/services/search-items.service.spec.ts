import { TestBed } from '@angular/core/testing';

import { SearchItemsService } from './search-items.service';

describe('SearchItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchItemsService = TestBed.get(SearchItemsService);
    expect(service).toBeTruthy();
  });
});
