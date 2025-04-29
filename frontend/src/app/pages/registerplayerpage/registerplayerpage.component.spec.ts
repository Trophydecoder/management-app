import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterplayerpageComponent } from './registerplayerpage.component';

describe('RegisterplayerpageComponent', () => {
  let component: RegisterplayerpageComponent;
  let fixture: ComponentFixture<RegisterplayerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterplayerpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterplayerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
