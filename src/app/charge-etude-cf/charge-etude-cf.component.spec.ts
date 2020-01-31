import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeEtudeCFComponent } from './charge-etude-cf.component';

describe('ChargeEtudeCFComponent', () => {
  let component: ChargeEtudeCFComponent;
  let fixture: ComponentFixture<ChargeEtudeCFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeEtudeCFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeEtudeCFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
