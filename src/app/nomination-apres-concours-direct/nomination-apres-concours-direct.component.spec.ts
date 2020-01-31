import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationApresConcoursDirectComponent } from './nomination-apres-concours-direct.component';

describe('NominationApresConcoursDirectComponent', () => {
  let component: NominationApresConcoursDirectComponent;
  let fixture: ComponentFixture<NominationApresConcoursDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationApresConcoursDirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationApresConcoursDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
