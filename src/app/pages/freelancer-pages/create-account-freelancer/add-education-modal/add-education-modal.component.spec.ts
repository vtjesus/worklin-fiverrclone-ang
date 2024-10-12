import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationModalComponent } from './add-education-modal.component';

describe('AddEducationModalComponent', () => {
  let component: AddEducationModalComponent;
  let fixture: ComponentFixture<AddEducationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEducationModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEducationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
