import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDeDivisionFopComponent } from './chef-de-division-fop.component';

describe('ChefDeDivisionFopComponent', () => {
  let component: ChefDeDivisionFopComponent;
  let fixture: ComponentFixture<ChefDeDivisionFopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefDeDivisionFopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDeDivisionFopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
