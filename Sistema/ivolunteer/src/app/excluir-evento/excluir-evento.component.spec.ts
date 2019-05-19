import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirEventoComponent } from './excluir-evento.component';

describe('ExcluirEventoComponent', () => {
  let component: ExcluirEventoComponent;
  let fixture: ComponentFixture<ExcluirEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
