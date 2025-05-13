import { TestBed } from '@angular/core/testing';

import { DeleteplayerService } from './deleteplayer.service';

describe('DeleteplayerService', () => {
  let service: DeleteplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
