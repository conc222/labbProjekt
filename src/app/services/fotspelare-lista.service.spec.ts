import { TestBed } from '@angular/core/testing';

import { FotspelareListaService } from './fotspelare-lista.service';

describe('FotspelareListaService', () => {
  let service: FotspelareListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotspelareListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
