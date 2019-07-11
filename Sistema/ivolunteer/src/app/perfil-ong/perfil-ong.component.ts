import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OngsService, EventsService, VoluntariosService, AuthenticationService } from '../_services';
import { Ong, Event, Voluntario, Usuario } from '../_models';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { ComponentFactoryResolver } from '@angular/core/src/render3';

@Component({
  selector: 'app-perfil-ong',
  templateUrl: './perfil-ong.component.html',
  styleUrls: ['./perfil-ong.component.scss']
})
export class PerfilOngComponent implements OnInit {

  public imgPerfilVoluntarioPadrao : string = 'assets/images/user-default.png';
  public imgPerfilOngPadrao : string = 'assets/images/ong-default.png';
  public imgEventoPadrao : string = 'assets/images/evento-default.jpg';

  numSeguidores: number;
  public id_ong: number;
  voluntarios: Voluntario[] = [];
  idSeguidores: number[] = [];
  idVoluntario: number;
  idsOngsSeguidas: number[] = [];

  ong: Ong;
  eventos: Event[] = [];

  eventosActive = true;
  publicacoesActive = false;
  seguidoresActive = false;
  galeriaActive = false;

  // Ação a ser tomada ao se pressionar o botão "Seguir/Deixar de seguir"
  statusFollow: boolean = null;

  usuario: Usuario = new Usuario();
  currentVoluntario: Voluntario = new Voluntario();
  error: string = null;

  // Texto que aparece junto ao botão de seguir.
  textFollowUnfollow: string = null;

  // Refresh na lista de seguidores
  dataRefresher: any;

  constructor(
    public auth: AuthenticationService,
    private ongService: OngsService,
    private eventService: EventsService,
    private route: ActivatedRoute,
    private voluntarioService: VoluntariosService,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id_ong = params['id'];
      }
    })
  }

  ngOnInit() {
    this.statusFollow = true;
    this.textFollowUnfollow = 'Seguir';
    this.loadOng();
    const id_string = this.id_ong.toString();
    this.loadEventos(id_string);
    this.loadCurrentVoluntario();
  }

  loadOng() {
    this.ongService.getOng(this.id_ong).subscribe(data => {
      this.ong = data;
      this.numSeguidores = this.ong.idsSeguidores.length;
      this.idSeguidores = this.ong.idsSeguidores;
      this.voluntarios = [];
      this.idSeguidores.forEach(id => {
        this.voluntarioService.getVoluntario(id).subscribe(data => {
          this.voluntarios.push(data);
        });
      });
    })
  }

  loadEventos(id: string) {
    this.eventService.getEventByOng(id).subscribe(data => {
      this.eventos = data;
    });
  }

  loadCurrentVoluntario() {
    this.auth.currentUser.subscribe(data => {
      this.usuario = data;
    });
    if (this.usuario !== null) {
      this.voluntarioService.getVoluntario(this.usuario.idVoluntario).subscribe(vol => {
        this.currentVoluntario = vol;
        this.currentVoluntario.idsOngsSeguidas.forEach(id => {
          if (id == this.id_ong) {
            this.statusFollow = false;
            this.textFollowUnfollow = 'Deixar de seguir';
          }
        });
      });
    }
  }

  follow() {
    const statusFollowString: string = String(this.statusFollow);
    this.voluntarioService.followOng(this.id_ong, statusFollowString)
      .pipe(first())
      .subscribe(data => {
        if (data) {
          if (this.statusFollow) {
            this.toastr.success('Você seguiu esta ONG');
            this.statusFollow = false;
            this.textFollowUnfollow = 'Deixar de seguir';
          } else {
            this.toastr.success('Você deixou de seguir esta ONG');
            this.statusFollow = true;
            this.textFollowUnfollow = 'Seguir';
          }
          this.loadOng();
        }
        error => {
          this.error = JSON.stringify(error);
          this.toastr.error(this.error);
        };
      });
  }

}
