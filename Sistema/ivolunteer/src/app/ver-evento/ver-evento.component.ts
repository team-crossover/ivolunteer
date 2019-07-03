import { Component, OnInit } from '@angular/core';
import { AuthenticationService, EventsService, OngsService } from '../_services';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Event, Ong } from '../_models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.scss']
})
export class VerEventoComponent implements OnInit {

  // eventId?: number = -1;
  // isOwnedByMe: boolean = false;
  numInteressados: number;
  event: Event = new Event();
  ong: Ong = new Ong();
  eventoDataTemp: string;
  eventoTimeTemp: string;
  public idEvento: number;

  constructor(public eventService: EventsService,
    public ongService: OngsService,
    public auth: AuthenticationService,
    public router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.idEvento = params.id;
    });
  }

  ngOnInit() {
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
}
