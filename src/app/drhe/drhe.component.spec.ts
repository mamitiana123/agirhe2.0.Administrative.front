import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DRHEComponent } from './drhe.component';

describe('DRHEComponent', () => {
  let component: DRHEComponent;
  let fixture: ComponentFixture<DRHEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DRHEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DRHEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
