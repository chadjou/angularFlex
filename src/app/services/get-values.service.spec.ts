import { TestBed } from '@angular/core/testing';

import { GetValuesService } from './get-values.service';

describe('GetValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetValuesService = TestBed.get(GetValuesService);
    expect(service).toBeTruthy();
  });
});
