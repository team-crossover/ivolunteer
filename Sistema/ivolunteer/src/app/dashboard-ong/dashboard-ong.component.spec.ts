import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOngComponent } from './dashboard-ong.component';

describe('DashboardOngComponent', () => {
  let component: DashboardOngComponent;
  let fixture: ComponentFixture<DashboardOngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
