import { TestBed } from '@angular/core/testing';

import { UpdateplayerService } from './updateplayer.service';

describe('UpdateplayerService', () => {
  let service: UpdateplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
