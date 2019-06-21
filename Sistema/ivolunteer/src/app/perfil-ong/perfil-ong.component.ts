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
    this.setStatusFollow();
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
    });
  }


setStatusFollow() {
  if (this.currentVoluntario.idsOngsSeguidas.includes(this.id_ong)) {
    this.statusFollow = false;
  } else {
    this.statusFollow = true;
  }
  console.log('status', this.statusFollow);
}

  follow() {
    const statusFollowString: string = String(this.statusFollow);
    this.voluntarioService.followOng(this.id_ong, statusFollowString)
    .pipe(first())
    .subscribe(data => {
      if (data) {
        if (this.statusFollow) {
          this.toastr.success('Você está seguindo esta ONG');
        } else {
          this.toastr.success('Você deixou de seguir esta ONG');
        }
      }
      error => {
        this.error = JSON.stringify(error);
        this.toastr.error(this.error);
      };
    });
  }

}
