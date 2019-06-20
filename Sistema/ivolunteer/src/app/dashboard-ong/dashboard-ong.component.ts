import { Component, OnInit } from '@angular/core';
import { AuthenticationService, OngsService, EventsService } from '../_services';
import { Usuario, Ong, Event } from '../_models';

@Component({
  selector: 'app-dashboard-ong',
  templateUrl: './dashboard-ong.component.html',
  styleUrls: ['./dashboard-ong.component.scss']
})
export class DashboardOngComponent implements OnInit {

  eventos: Event[] = [];
  eventosDash: Event[] = [];
  ong: Ong = new Ong();
  numEventos: number;
  postagens: string[] = ['Novidades', 'Meta atingida', 'Novo Local'];
  numPostagens: number;
  numVoluntarios: number;
  data: String = "23/05/2019";
  usuario: Usuario = new Usuario();

  overviewActive = true;
  eventsActive = false;
  postsActive = false;

  constructor(public authService: AuthenticationService,
              private eventService: EventsService,
              private ongService: OngsService) {
    this.numPostagens = this.postagens.length;
  }

  ngOnInit() {
    this.getUsuario();
    const idOngString = this.usuario.idOng.toString();
    this.loadEventos(idOngString);
    this.loadOng(this.usuario.idOng);
  }

  getUsuario() {
    this.authService.currentUser.subscribe(data => {
      this.usuario = data;
    });
  }

  loadOng(idOng: number) {
    this.ongService.getOng(idOng).subscribe(data => {
      this.ong = data;
      this.numEventos = this.ong.idsEventos.length;
    })
  } 

  loadEventos(id: string) {
    this.eventService.getEventByOng(id).subscribe(data => {
      this.eventos = data;
      data.forEach(evento => {
        if (this.eventosDash.length < 3) {
          this.eventosDash.push(evento);
        }
      });
    });
    this.numVoluntarios = 0;
    this.eventos.forEach(evento => {
      this.numVoluntarios = this.numVoluntarios + evento.idsVoluntariosConfirmados.length;
    });
  }


}
