/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeanceService } from './seance.service';

describe('Service: Seance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeanceService]
    });
  });

  it('should ...', inject([SeanceService], (service: SeanceService) => {
    expect(service).toBeTruthy();
  }));
});
