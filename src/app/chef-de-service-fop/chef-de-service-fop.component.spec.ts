import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDeServiceFopComponent } from './chef-de-service-fop.component';

describe('ChefDeServiceFopComponent', () => {
  let component: ChefDeServiceFopComponent;
  let fixture: ComponentFixture<ChefDeServiceFopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefDeServiceFopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDeServiceFopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
