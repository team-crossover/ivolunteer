import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';
import { EventoApiService } from '../evento-api.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  
  eventos = [];

  constructor(
    private auth: AuthenticationService,
    private eventoService: EventoApiService
  ) { }

  ngOnInit() {
    this.loadEventos();
  }

  loadEventos() {
      this.eventoService.getEventos().subscribe(data => {
        this.eventos = data;
      });
  }

}
