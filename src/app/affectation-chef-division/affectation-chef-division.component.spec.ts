import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationChefDivisionComponent } from './affectation-chef-division.component';

describe('AffectationChefDivisionComponent', () => {
  let component: AffectationChefDivisionComponent;
  let fixture: ComponentFixture<AffectationChefDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectationChefDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationChefDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
