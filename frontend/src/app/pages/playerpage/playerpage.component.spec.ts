import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerpageComponent } from './playerpage.component';

describe('PlayerpageComponent', () => {
  let component: PlayerpageComponent;
  let fixture: ComponentFixture<PlayerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
