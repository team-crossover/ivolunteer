import { Component, OnInit } from '@angular/core';
import { AuthenticationService, EventsService } from '../_services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClrLoadingState } from '@clr/angular';
import { VerEventoComponent } from '../ver-evento/ver-evento.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-excluir-evento',
  templateUrl: './excluir-evento.component.html',
  styleUrls: ['./excluir-evento.component.scss']
})
export class ExcluirEventoComponent implements OnInit {

  idEvento: number;
  error: string = null;
  loading: boolean = false;
  submitBtnState = ClrLoadingState.DEFAULT;
  submited = false;

  constructor(public authService: AuthenticationService,
    public router: Router,
    private toastr: ToastrService,
    public eventsService: EventsService,
    verEvent: VerEventoComponent) {
    this.idEvento = verEvent.idEvento;
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.submited)
      return;
    //Altera o evento
    this.eventsService.deleteEvent(this.idEvento)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            this.submited = true;
            this.submitBtnState = ClrLoadingState.SUCCESS;
            this.router.navigate(['/eventos']);
            this.toastr.success('Excluído cadastro de Evento');
          }
        },
        error => {
          this.submited = true;
          this.error = JSON.stringify(error);
          this.loading = false;
          this.toastr.error(this.error);
          this.submitBtnState = ClrLoadingState.DEFAULT;
        });
  }
}
