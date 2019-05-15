import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineEventoComponent } from './timeline-evento.component'

describe('TimelineEventoComponent', () => {
  let component: TimelineEventoComponent;
  let fixture: ComponentFixture<TimelineEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
