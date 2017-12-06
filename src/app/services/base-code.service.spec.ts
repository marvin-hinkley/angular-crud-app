import { TestBed, inject } from '@angular/core/testing';

import { BaseCodeService } from './base-code.service';

describe('BaseCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseCodeService]
    });
  });

  it('should be created', inject([BaseCodeService], (service: BaseCodeService) => {
    expect(service).toBeTruthy();
  }));
});
