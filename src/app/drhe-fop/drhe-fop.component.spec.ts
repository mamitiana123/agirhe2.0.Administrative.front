import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrheFopComponent } from './drhe-fop.component';

describe('DrheFopComponent', () => {
  let component: DrheFopComponent;
  let fixture: ComponentFixture<DrheFopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrheFopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrheFopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
