import { Component, OnInit } from '@angular/core';
import { EventsService, OngsService } from '../_services';
import { Event, Ong } from '../_models';

@Component({
  selector: 'app-convidado',
  templateUrl: './convidado.component.html',
  styleUrls: ['./convidado.component.scss']
})
export class ConvidadoComponent implements OnInit {

  eventos: Event[] = [];
  ongs: Ong[] = [];

  constructor(private eventService: EventsService,
    private ongService: OngsService) { }

  ngOnInit() {
    this.loadEventos();
    this.loadOngs();
  }

  loadEventos() {
    this.eventService.getEvents().subscribe(data => {
      data.forEach(evento => {
        if (this.eventos.length < 3) {
          this.eventos.push(evento);
        }
      })
    });
  }

  loadOngs() {
    this.ongService.getOngs().subscribe(data => {
      data.forEach(ong => {
        if (this.ongs.length < 4) {
          this.ongs.push(ong);
        }
      })
    })
  }


}
