import { TestBed } from '@angular/core/testing';

import { RegisterplayerService } from './registerplayer.service';

describe('RegisterplayerService', () => {
  let service: RegisterplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
