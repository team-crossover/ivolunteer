import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngFiltroComponent } from './ong-filtro.component';

describe('OngFiltroComponent', () => {
  let component: OngFiltroComponent;
  let fixture: ComponentFixture<OngFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OngFiltroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
