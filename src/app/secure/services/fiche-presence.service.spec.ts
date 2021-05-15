/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FichePresenceService } from './fiche-presence.service';

describe('Service: FichePresence', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FichePresenceService]
    });
  });

  it('should ...', inject([FichePresenceService], (service: FichePresenceService) => {
    expect(service).toBeTruthy();
  }));
});
