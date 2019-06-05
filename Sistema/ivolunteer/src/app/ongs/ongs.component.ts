import { Component, OnInit } from '@angular/core';
import { OngApiService } from '../ong-api.service';

@Component({
  selector: 'app-ongs',
  templateUrl: './ongs.component.html',
  styleUrls: ['./ongs.component.scss']
})
export class OngsComponent implements OnInit {

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
