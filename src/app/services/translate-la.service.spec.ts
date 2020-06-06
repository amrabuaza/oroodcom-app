import { TestBed } from '@angular/core/testing';

import { TranslateLaService } from './translate-la.service';

describe('TranslateLaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateLaService = TestBed.get(TranslateLaService);
    expect(service).toBeTruthy();
  });
});
