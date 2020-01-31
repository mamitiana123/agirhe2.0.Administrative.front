import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNacdComponent } from './new-nacd.component';

describe('NewNacdComponent', () => {
  let component: NewNacdComponent;
  let fixture: ComponentFixture<NewNacdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNacdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNacdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
