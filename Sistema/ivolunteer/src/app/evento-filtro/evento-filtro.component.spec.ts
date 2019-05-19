import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoFiltroComponent } from './evento-filtro.component';

describe('EventoFiltroComponent', () => {
  let component: EventoFiltroComponent;
  let fixture: ComponentFixture<EventoFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
