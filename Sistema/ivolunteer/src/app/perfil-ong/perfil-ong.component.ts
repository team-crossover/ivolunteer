import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';
import { ActivatedRoute } from '@angular/router';
import { OngsService } from '../_services';
import { Ong } from '../_models';

@Component({
  selector: 'app-perfil-ong',
  templateUrl: './perfil-ong.component.html',
  styleUrls: ['./perfil-ong.component.scss']
})
export class PerfilOngComponent implements OnInit {

  seguidores: string[] = ['João Pedro', 'Natália Lopes', 'Nelson William', 'Sofia Moraes'];

  numSeguidores: number;

  id_ong: number;

  ong: Ong;

  eventosActive = true;
  publicacoesActive = false;
  seguidoresActive = false;
  galeriaActive = false;

  constructor(
    public auth: AuthenticationService,
    private ongService: OngsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id_ong = params['id'];
      }
    })
    this.numSeguidores = this.seguidores.length;

    for (let index = 0; index < this.seguidores.length; index++) {
      let seguidor = this.seguidores[index];

    }
  }

  ngOnInit() {
    this.loadOng();
  }

  loadOng() {
    this.ongService.getOng(this.id_ong).subscribe(data => {
      this.ong = data;
    })
  }

}
