import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilOngComponent } from './perfil-ong.component';

describe('PerfilOngComponent', () => {
  let component: PerfilOngComponent;
  let fixture: ComponentFixture<PerfilOngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilOngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
