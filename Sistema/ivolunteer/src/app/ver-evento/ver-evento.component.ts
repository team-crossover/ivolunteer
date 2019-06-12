import { Component, OnInit } from '@angular/core';
import { AuthenticationService, EventsService } from '../_services';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Event } from '../_models';

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.scss']
})
export class VerEventoComponent implements OnInit {

  // eventId?: number = -1;
  // isOwnedByMe: boolean = false;
  numInteressados: number;

  constructor(
    // private route: ActivatedRoute,
    public auth: AuthenticationService,
    // private events: EventsService
  ) {
    this.numInteressados = 0;
    // this.route.params.subscribe(params => {
    //   this.eventId = params.id;

    //   const currentUser = this.auth.currentUserValue;
    //   if (!currentUser)
    //     return;

    //   if (currentUser.role != 'ong')
    //     this.isOwnedByMe = false;
    //   else {
    //     this.events.getEvent(this.eventId)
    //       .subscribe(
    //         (event: Event) => {
    //           this.isOwnedByMe = event.ongId == currentUser.id;
    //         }
    //       );
    //   }
    // });
  }

  ngOnInit() { }
}
