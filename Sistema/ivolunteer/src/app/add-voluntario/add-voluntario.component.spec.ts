import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVoluntarioComponent } from './add-voluntario.component';

describe('AddVoluntarioComponent', () => {
  let component: AddVoluntarioComponent;
  let fixture: ComponentFixture<AddVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
