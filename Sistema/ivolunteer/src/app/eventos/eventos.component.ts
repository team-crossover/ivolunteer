import { Component, OnInit } from '@angular/core';
import { AuthenticationService, EventsService, OngsService } from '../_services';
import { Event, Ong } from '../_models';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos: Event[] = [];
  ongs: Ong[] = [];

  constructor(
    public auth: AuthenticationService,
    private eventService: EventsService,
    private ongService: OngsService
  ) { }

  ngOnInit() {
    this.loadEventos();
    this.loadOngs();
  }

  loadEventos() {
    this.eventService.getEvents().subscribe(data => {
      this.eventos = data;
    });
  }

  loadOngs() {
    this.ongService.getOngs().subscribe(data => {
      this.ongs = data;
    })
  }


}
