import { TestBed } from '@angular/core/testing';

import { PronunciationAPIService } from './pronunciation-api.service';

describe('PronunciationAPIService', () => {
  let service: PronunciationAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PronunciationAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
