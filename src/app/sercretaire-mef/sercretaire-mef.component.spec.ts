import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SercretaireMefComponent } from './sercretaire-mef.component';

describe('SercretaireMefComponent', () => {
  let component: SercretaireMefComponent;
  let fixture: ComponentFixture<SercretaireMefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SercretaireMefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SercretaireMefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
