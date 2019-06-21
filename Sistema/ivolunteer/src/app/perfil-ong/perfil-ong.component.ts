import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OngsService, EventsService, VoluntariosService, AuthenticationService } from '../_services';
import { Ong, Event, Voluntario, Usuario } from '../_models';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

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
    this.voluntarioService.getVoluntario(this.usuario.idVoluntario).subscribe(vol => {
      this.currentVoluntario = vol;
      this.idsOngsSeguidas = vol.idsOngsSeguidas;
      if (this.idsOngsSeguidas.indexOf(this.id_ong) === -1) {
        this.statusFollow = true;
        this.textFollowUnfollow = 'Seguir';
      } else {
        this.statusFollow = false;
        this.textFollowUnfollow = 'Deixar de seguir';
      }
    });
  }


  follow() {
    const statusFollowString: string = String(this.statusFollow);
    this.voluntarioService.followOng(this.id_ong, statusFollowString)
    .pipe(first())
    .subscribe(data => {
      if (data) {
        if (this.statusFollow) {
          this.toastr.success('Você está seguindo esta ONG');
          this.statusFollow = false;
          this.textFollowUnfollow = 'Deixar de seguir';
        } else {
          this.toastr.success('Você deixou de seguir esta ONG');
          this.statusFollow = true;
          this.textFollowUnfollow = 'Seguir';
        }
      }
      error => {
        this.error = JSON.stringify(error);
        this.toastr.error(this.error);
      };
    });
  }

}
