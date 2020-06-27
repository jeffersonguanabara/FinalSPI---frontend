import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJediComponent } from './form-jedi.component';

describe('FormJediComponent', () => {
  let component: FormJediComponent;
  let fixture: ComponentFixture<FormJediComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJediComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
