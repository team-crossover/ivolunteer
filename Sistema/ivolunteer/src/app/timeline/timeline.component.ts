import { Component, OnInit } from '@angular/core';
import { AuthenticationService, OngsService, EventsService, VoluntariosService } from '../_services';
import { Usuario, Ong, Event, Voluntario } from '../_models';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  usuario: Usuario = new Usuario();
  eventos: Event[] = [];
  voluntario: Voluntario = new Voluntario();
  ongs: Ong[] = [];

  constructor(public auth: AuthenticationService,
              private eventService: EventsService,
              private ongService: OngsService,
              private voluntarioService: VoluntariosService) { }

  ngOnInit() {
    this.getUsuario();
    this.loadVoluntario();
  }

  getUsuario() {
    this.auth.currentUser.subscribe(data => {
      this.usuario = data;
    });
  }

  loadVoluntario() {
    let idString;
    this.voluntarioService.getVoluntario(this.usuario.idVoluntario).subscribe(data => {
      data.idsOngsSeguidas.forEach(id => {
        this.ongService.getOng(id).subscribe(ong => {
          this.ongs.push(ong);
        });
        idString = "" + id;
        idString = String(id);
        this.eventService.getEventByOng(idString).subscribe(evento => {
          evento.forEach(ev => {
            this.eventos.push(ev);
          });
        });
      })
    });
  }

}
