import { Component, OnInit } from '@angular/core';
import { Event } from '../_models';
import { ClrLoadingState } from '@clr/angular';
import { AuthenticationService, EventsService } from '../_services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { NovoEvento } from '../_models/novo-evento';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.scss']
})
export class AddEventoComponent implements OnInit {

  areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
    'Educação', 'Esportes', 'Idosos', 'Jovens',
    'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
    'Política', 'Refugiados', 'Saúde', 'Outras'];

  novoEvento: NovoEvento = new NovoEvento();
  error: string = null;
  loading: boolean = false;

  submitBtnState = ClrLoadingState.DEFAULT;

  constructor(public eventosService: EventsService,
    public authService: AuthenticationService,
    public router: Router,
    private toastr: ToastrService) { }


  ngOnInit() {
  }

  onSubmit() {
    this.submitBtnState = ClrLoadingState.LOADING;

    //Pega o id da ong que está cadastrando o novo evento
    this.authService.getCurrentUserOng().subscribe(ong => {
      this.novoEvento.idOng = ong.id;

      //Cria o novo evento
      this.eventosService.createEvent(this.novoEvento)
        .pipe(first())
        .subscribe(
          data => {
            if (data) {
              this.submitBtnState = ClrLoadingState.SUCCESS;
              this.router.navigate(["/login"]);
              this.toastr.success('Adicionado cadastro de Evento');
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
}
