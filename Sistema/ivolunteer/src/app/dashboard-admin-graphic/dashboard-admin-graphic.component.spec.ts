import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminGraphicComponent } from './dashboard-admin-graphic.component';

describe('DashboardAdminGraphicComponent', () => {
  let component: DashboardAdminGraphicComponent;
  let fixture: ComponentFixture<DashboardAdminGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAdminGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdminGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
