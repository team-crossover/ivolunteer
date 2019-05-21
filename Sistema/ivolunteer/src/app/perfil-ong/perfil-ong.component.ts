import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-perfil-ong',
  templateUrl: './perfil-ong.component.html',
  styleUrls: ['./perfil-ong.component.scss']
})
export class PerfilOngComponent implements OnInit {

  seguidores: string[] = ['João Pedro', 'Natália Lopes', 'Nelson William', 'Sofia Moraes'];

  numSeguidores: number;

  constructor(
    private auth: AuthenticationService
  ) {
    this.numSeguidores = this.seguidores.length;

    for (let index = 0; index < this.seguidores.length; index++) {
      let seguidor = this.seguidores[index];

    }
  }

  ngOnInit() {
  }

}
