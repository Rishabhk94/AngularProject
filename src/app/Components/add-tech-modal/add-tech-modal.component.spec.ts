import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechModalComponent } from './add-tech-modal.component';

describe('AddTechModalComponent', () => {
  let component: AddTechModalComponent;
  let fixture: ComponentFixture<AddTechModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTechModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTechModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
