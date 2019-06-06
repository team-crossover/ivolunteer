import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-timeline-evento',
  templateUrl: './timeline-evento.component.html',
  styleUrls: ['./timeline-evento.component.scss']
})
export class TimelineEventoComponent implements OnInit {

  constructor(
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
