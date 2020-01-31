import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauNacdComponent } from './nouveau-nacd.component';

describe('NouveauNacdComponent', () => {
  let component: NouveauNacdComponent;
  let fixture: ComponentFixture<NouveauNacdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauNacdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauNacdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
