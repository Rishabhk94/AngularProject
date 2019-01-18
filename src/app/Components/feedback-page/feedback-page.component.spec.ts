import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTechPageComponent } from './feedback-page.component';

describe('NewTechPageComponent', () => {
  let component: NewTechPageComponent;
  let fixture: ComponentFixture<NewTechPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTechPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTechPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
