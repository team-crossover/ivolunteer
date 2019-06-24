import { Component, OnInit } from '@angular/core';
import { AuthenticationService, ImgsService } from '../_services';
import { ActivatedRoute } from '@angular/router';
import { VoluntariosService, EventsService, OngsService } from '../_services';
import { Voluntario, Event, Ong, Imagem } from '../_models';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  voluntario: Voluntario;
  eventos: Event[] = [];
  ongs: Ong[] = [];
  imgPerfil: string;

  public idVoluntario: number;

  numOngsSeguidas: number;
  numEventosConfirmados: number;

  idEventosConfirmados: number[] = [];
  idOngsSeguidas: number[] = [];

  constructor(
    public auth: AuthenticationService,
    public voluntarioService: VoluntariosService,
    public imgsService: ImgsService,
    private eventService: EventsService,
    private ongService: OngsService,
    private route: ActivatedRoute
  ) {
    this.imgPerfil = 'assets/images/loading.gif';
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.idVoluntario = params['id'];
      }
    });
  }

  ngOnInit() {
    this.loadVoluntario(this.idVoluntario);
  }

  loadVoluntario(id: number) {
    this.voluntarioService.getVoluntario(id).subscribe(data => {
      this.voluntario = data;
      this.numOngsSeguidas = this.voluntario.idsOngsSeguidas.length;
      this.numEventosConfirmados = this.voluntario.idsEventosConfirmados.length;
      this.idEventosConfirmados = this.voluntario.idsEventosConfirmados;
      this.idOngsSeguidas = this.voluntario.idsOngsSeguidas;
      this.idOngsSeguidas.forEach(id => {
        this.ongService.getOng(id).subscribe(data => {
          this.ongs.push(data);
        });
      });
      this.idEventosConfirmados.forEach(id => {
        this.eventService.getEvent(id).subscribe(data => {
          this.eventos.push(data);
        });
      });
      this.getImgPerfil();
    });
  }

  getImgPerfil() {
    if (this.voluntario.idImgPerfil != null)
      this.imgsService.getImg(this.voluntario.idImgPerfil).subscribe(data => {
        if (data && data.src)
          this.imgPerfil = data.src;
        else
          this.imgPerfil = 'assets/images/user-default.png';
      }, err => {
        this.imgPerfil = 'assets/images/user-default.png';
      });
    else
      this.imgPerfil = 'assets/images/user-default.png';
  }
}
