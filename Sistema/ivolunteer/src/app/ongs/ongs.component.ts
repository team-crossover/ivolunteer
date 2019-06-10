import { Component, OnInit } from '@angular/core';
import { OngsService } from '../_services';
import { Ong } from '../_models';

@Component({
  selector: 'app-ongs',
  templateUrl: './ongs.component.html',
  styleUrls: ['./ongs.component.scss']
})
export class OngsComponent implements OnInit {

  ongs: Ong;

  constructor(private ongService: OngsService) { }

  ngOnInit() {
    this.loadOngs();
  }

  loadOngs() {
    this.ongService.getOngs().subscribe(data => {
      this.ongs = data;
    })
  }

}
