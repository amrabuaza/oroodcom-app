import { TestBed } from '@angular/core/testing';

import { ImageReaderService } from './image-reader.service';

describe('ImageReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageReaderService = TestBed.get(ImageReaderService);
    expect(service).toBeTruthy();
  });
});
