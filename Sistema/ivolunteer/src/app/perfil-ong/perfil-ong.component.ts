import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';
import { ActivatedRoute } from '@angular/router';
import { OngsService, EventsService, VoluntariosService } from '../_services';
import { Ong, Event, Voluntario } from '../_models';

@Component({
  selector: 'app-perfil-ong',
  templateUrl: './perfil-ong.component.html',
  styleUrls: ['./perfil-ong.component.scss']
})
export class PerfilOngComponent implements OnInit {

  numSeguidores: number;
  public id_ong: number;
  voluntarios: Voluntario[] = [];
  idSeguidores: number[] = [];
  idVoluntario: number;

  ong: Ong;
  eventos: Event[] = [];

  eventosActive = true;
  publicacoesActive = false;
  seguidoresActive = false;
  galeriaActive = false;

  constructor(
    public auth: AuthenticationService,
    private ongService: OngsService,
    private eventService: EventsService,
    private route: ActivatedRoute,
    private voluntarioService: VoluntariosService
  ) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id_ong = params['id'];
      }
    })
  }

  ngOnInit() {
    this.loadOng();
    const id_string = this.id_ong.toString();
    this.loadEventos(id_string);
    this.loadSeguidores(this.idSeguidores);
  }

  loadOng() {
    this.ongService.getOng(this.id_ong).subscribe(data => {
      this.ong = data;
      this.numSeguidores = this.ong.idsSeguidores.length;
      this.idSeguidores = this.ong.idsSeguidores;
    })
  }

  loadEventos(id: string) {
    this.eventService.getEventByOng(id).subscribe(data => {
      this.eventos = data;
    });
  }

  loadSeguidores(idSeguidores: number[]) {
    idSeguidores.forEach(id => {
      this.voluntarioService.getVoluntario(id).subscribe(data => {
        this.voluntarios.push(data);
      });
    });
  }

}
