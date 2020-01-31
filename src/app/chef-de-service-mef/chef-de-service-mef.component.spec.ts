import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDeServiceMefComponent } from './chef-de-service-mef.component';

describe('ChefDeServiceMefComponent', () => {
  let component: ChefDeServiceMefComponent;
  let fixture: ComponentFixture<ChefDeServiceMefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefDeServiceMefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDeServiceMefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
