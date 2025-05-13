import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditplayerpageComponent } from './editplayerpage.component';

describe('EditplayerpageComponent', () => {
  let component: EditplayerpageComponent;
  let fixture: ComponentFixture<EditplayerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditplayerpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditplayerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
