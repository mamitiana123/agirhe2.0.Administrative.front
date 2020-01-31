import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDeServiceCFComponent } from './chef-de-service-cf.component';

describe('ChefDeServiceCFComponent', () => {
  let component: ChefDeServiceCFComponent;
  let fixture: ComponentFixture<ChefDeServiceCFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefDeServiceCFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDeServiceCFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
