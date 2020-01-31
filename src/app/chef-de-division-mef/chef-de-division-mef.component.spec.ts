import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDeDivisionMefComponent } from './chef-de-division-mef.component';

describe('ChefDeDivisionMefComponent', () => {
  let component: ChefDeDivisionMefComponent;
  let fixture: ComponentFixture<ChefDeDivisionMefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefDeDivisionMefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDeDivisionMefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
