import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';
import { OngsService, AuthenticationService, EventsService } from '../_services';
import { ToastrService } from 'ngx-toastr';
import { NovoEvento } from '../_models/novo-evento';
import { Usuario, Event } from '../_models';
import { VerEventoComponent } from '../ver-evento/ver-evento.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss']
})
export class EditarEventoComponent implements OnInit {

  areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
    'Educação', 'Esportes', 'Idosos', 'Jovens',
    'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
    'Política', 'Refugiados', 'Saúde', 'Outras'];

  event: Event = new Event();
  error: string = null;
  loading: boolean = false;
  eventDataTemp: string;
  eventTimeTemp: string;
  usuario: Usuario = new Usuario();
  idEvento: number;

  submitBtnState = ClrLoadingState.DEFAULT;

  constructor(public ongsService: OngsService,
    public authService: AuthenticationService,
    public router: Router,
    private toastr: ToastrService,
    public eventsService: EventsService,
    verEvent: VerEventoComponent) {
    this.idEvento = verEvent.idEvento;
  }

  ngOnInit() {
    this.getUsuario();
    this.patchEvento();
  }

  getUsuario() {
    this.authService.currentUser.subscribe(data => {
      this.usuario = data;
    });
  }

  patchEvento() {
    this.eventsService.getEvent(this.idEvento).subscribe(data => {
      this.event = data;
     
      //Divide a data do evento e hora do evento
      var partes = this.event.dataRealizacao.split(' ');
      this.eventDataTemp = partes[0];
      this.eventTimeTemp = partes[1];

      partes = this.eventDataTemp.split('/');
      this.event.dataRealizacao = partes[2] + '-' + partes[1] + '-' + partes[0]
    });
  }

  onSubmit() {
    this.submitBtnState = ClrLoadingState.LOADING;

    //Pega o id da ong que está cadastrando o novo evento
    this.authService.getCurrentUserOng().subscribe(ong => {
      this.event.idOng = ong.id;

      // Coloca hora e data no formato certo
      if (this.eventDataTemp && this.eventTimeTemp) {
        var partes = this.event.dataRealizacao.split("-");
        this.event.dataRealizacao = partes[2] + "/" + partes[1] + "/" + partes[0] + " " + this.eventTimeTemp;
      }
      
      //Altera o evento
      this.eventsService.updateEvent(this.idEvento, this.event)
        .pipe(first())
        .subscribe(
          data => {
            if (data) {
              this.submitBtnState = ClrLoadingState.SUCCESS;
              this.router.navigate(['/eventos']);
              this.toastr.success('Atualizado cadastro de Evento');
            }
          },
          error => {
            this.error = JSON.stringify(error);
            this.loading = false;
            this.toastr.error(this.error);
            this.submitBtnState = ClrLoadingState.DEFAULT;
          });
    })
  }

  imgChangeListener(imageInput): void {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.event.img = event.target.result;
    });
    reader.readAsDataURL(file);
  }
}
