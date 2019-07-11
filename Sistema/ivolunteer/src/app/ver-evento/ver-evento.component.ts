import { Component, OnInit } from '@angular/core';
import { AuthenticationService, EventsService, OngsService, VoluntariosService } from '../_services';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Event, Ong, Usuario, Voluntario } from '../_models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.scss']
})
export class VerEventoComponent implements OnInit {

  public imgPerfilOngPadrao : string = 'assets/images/ong-default.png';
  public imgEventoPadrao : string = 'assets/images/evento-default.jpg';
  
  numInteressados: number;
  event: Event = new Event();
  ong: Ong = new Ong();
  eventoDataTemp: string;
  eventoTimeTemp: string;
  public idEvento: number;
  usuario: Usuario = new Usuario();
  currentVoluntario: Voluntario = new Voluntario();
  error: string = null;

  // Ação a ser tomada ao se pressionar o botão "Confirmar interesse"
  statusInterest: boolean = null;

  // Texto que aparece junto ao botão de confirmar.
  textInterest: string = null;

  constructor(public eventService: EventsService,
    public ongService: OngsService,
    public auth: AuthenticationService,
    public router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private voluntarioService: VoluntariosService) {

    this.route.params.subscribe(params => {
      this.idEvento = params.id;
    });
  }

  ngOnInit() {
    this.statusInterest = true;
    this.textInterest = "Confirmar interesse";
    this.loadCurrentVoluntario();
    this.patchEvento();
  }


  patchEvento() {
    //Pesquisa dados do evento
    this.eventService.getEvent(this.idEvento).subscribe(data => {
      this.event = data;

      //Separa data de horário
      let partes = this.event.dataRealizacao.split(' ');
      this.eventoDataTemp = partes[0];
      this.eventoTimeTemp = partes[1];

      //Pesquisa dados da ong
      this.ongService.getOng(this.event.idOng).subscribe(dataII => {
        this.ong = dataII;
      });
    });
  }

  loadCurrentVoluntario() {
    this.auth.currentUser.subscribe(data => {
      this.usuario = data;
    });
    if (this.usuario !== null) {
      this.voluntarioService.getVoluntario(this.usuario.idVoluntario).subscribe(vol => {
        this.currentVoluntario = vol;
        this.currentVoluntario.idsEventosConfirmados.forEach(id => {
          if (id == this.idEvento) {
            this.statusInterest = false;
            this.textInterest = 'Remover interesse no evento';
          }
        });
      });
    }
  }

  interest() {
    const statusInterestString: string = String(this.statusInterest);
    this.voluntarioService.subscribeOnEvent(this.idEvento, statusInterestString)
      .pipe(first())
      .subscribe(data => {
        if (data) {
          if (this.statusInterest) {
            this.toastr.success('Você confirmou interesse neste evento');
            this.statusInterest = false;
            this.textInterest = 'Remover interesse no evento';
          } else {
            this.toastr.success('Você removeu seu interesse no evento');
            this.statusInterest = true;
            this.textInterest = 'Confirmar interesse';
          }
          this.patchEvento();
          this.loadCurrentVoluntario();
        }
        error => {
          this.error = JSON.stringify(error);
          this.toastr.error(this.error);
        };
      });
  }

}
