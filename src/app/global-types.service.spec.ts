import { TestBed } from '@angular/core/testing';

import { GlobalTypesService } from './global-types.service';

describe('GlobalTypesService', () => {
  let service: GlobalTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
