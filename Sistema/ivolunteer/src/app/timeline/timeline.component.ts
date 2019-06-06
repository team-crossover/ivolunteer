import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
  }

}
