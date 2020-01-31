import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAffectationComponent } from './new-affectation.component';

describe('NewAffectationComponent', () => {
  let component: NewAffectationComponent;
  let fixture: ComponentFixture<NewAffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
