/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormateurService } from './formateur.service';

describe('Service: Formateur', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormateurService]
    });
  });

  it('should ...', inject([FormateurService], (service: FormateurService) => {
    expect(service).toBeTruthy();
  }));
});
