import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptableVerificateurMefComponent } from './comptable-verificateur-mef.component';

describe('ComptableVerificateurMefComponent', () => {
  let component: ComptableVerificateurMefComponent;
  let fixture: ComponentFixture<ComptableVerificateurMefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptableVerificateurMefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptableVerificateurMefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
