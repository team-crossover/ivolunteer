import { Component, OnInit } from '@angular/core';
import { OngApiService } from '../ong-api.service';

@Component({
  selector: 'app-ong-card',
  templateUrl: './ong-card.component.html',
  styleUrls: ['./ong-card.component.scss']
})
export class OngCardComponent implements OnInit {

  ongs = [];

  constructor(private ongService: OngApiService) { }

  ngOnInit() {
    this.loadOngs();
  }

  loadOngs() {
    this.ongService.getONGs().subscribe(data => {
      this.ongs = data;
    });
  }

}
