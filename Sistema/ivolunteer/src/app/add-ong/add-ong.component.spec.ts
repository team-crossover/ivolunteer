import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOngComponent } from './add-ong.component';

describe('AddOngComponent', () => {
  let component: AddOngComponent;
  let fixture: ComponentFixture<AddOngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
