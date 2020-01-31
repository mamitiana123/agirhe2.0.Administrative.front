import { TestBed, inject } from '@angular/core/testing';

import { RecrutementInteresseServiceService } from './recrutement-interesse-service.service';

describe('RecrutementInteresseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecrutementInteresseServiceService]
    });
  });

  it('should be created', inject([RecrutementInteresseServiceService], (service: RecrutementInteresseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
