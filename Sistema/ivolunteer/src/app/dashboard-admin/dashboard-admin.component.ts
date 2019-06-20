import { Component, OnInit } from '@angular/core';
import { Voluntario, Event, Ong } from '../_models';
import { VoluntariosService, EventsService, OngsService } from '../_services';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

  numOngs: number;
  numUsuarios: number;
  numEventos: number;

  ongs: Ong[] = [];
  eventos: Event[] = [];
  voluntarios: Voluntario[] = [];

  postagens: string[] = ['Novidades', 'Meta atingida', 'Novo Local'];
  numPostagens: number;

  data: String;

  overviewActive = true;
  eventsActive = false;
  postsActive = false;
  usersActive = false;
  ongsActive = false;

  constructor(private ongService: OngsService,
              private voluntarioService: VoluntariosService,
              private eventosService: EventsService) { 

    this.data = "23/05/2019";

    this.numPostagens = this.postagens.length;
    for (let index = 0; index < this.postagens.length; index++) {
      let post = this.postagens[index];

    }

  }

  ngOnInit() {
    this.loadOngs();
    this.loadEvents();
    this.loadVoluntarios();
  }

  loadEvents() {
    this.eventosService.getEvents().subscribe(data => {
      this.eventos = data;
      this.numEventos = this.eventos.length;
    });
  }

  loadVoluntarios() {
    this.voluntarioService.getVoluntarios().subscribe(data => {
      this.voluntarios = data;
      this.numUsuarios = this.voluntarios.length;
    });
  }

  loadOngs() {
    this.ongService.getOngs().subscribe(data => {
      this.ongs = data;
      this.numOngs = this.ongs.length;
    });
  }

}
