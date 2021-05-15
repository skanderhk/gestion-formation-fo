/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GroupeService } from './groupe.service';

describe('Service: Groupe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupeService]
    });
  });

  it('should ...', inject([GroupeService], (service: GroupeService) => {
    expect(service).toBeTruthy();
  }));
});
