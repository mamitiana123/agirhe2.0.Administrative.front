import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDeSaisieFopComponent } from './agent-de-saisie-fop.component';

describe('AgentDeSaisieFopComponent', () => {
  let component: AgentDeSaisieFopComponent;
  let fixture: ComponentFixture<AgentDeSaisieFopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentDeSaisieFopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentDeSaisieFopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
