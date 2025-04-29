import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterguardianPageComponent } from './enterguardian-page.component';

describe('EnterguardianPageComponent', () => {
  let component: EnterguardianPageComponent;
  let fixture: ComponentFixture<EnterguardianPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterguardianPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterguardianPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
