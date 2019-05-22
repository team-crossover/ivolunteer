import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

  ongs: string[] = ['Clube do Gato', 'Lar de Idosos'];
  numOngs: number;

  usuarios: string[] = ['João Pedro', 'Natália Lopes', 'Nelson William', 'Sofia Moraes'];
  numUsuarios: number;

  eventos: string[] = ['Feira de Adoção', 'Arrecadação', 'Visita ao Abrigo', 'Jantar beneficiente'];
  numEventos: number;

  postagens: string[] = ['Novidades', 'Meta atingida', 'Novo Local'];
  numPostagens: number;

  data: String;

  constructor() { 

    this.data = "23/05/2019";

    this.numOngs = this.ongs.length;
    for (let index = 0; index < this.ongs.length; index++) {
      let ong = this.ongs[index];

    }

    this.numEventos = this.eventos.length;
    for (let index = 0; index < this.eventos.length; index++) {
      let event = this.eventos[index];

    }

    this.numPostagens = this.postagens.length;
    for (let index = 0; index < this.postagens.length; index++) {
      let post = this.postagens[index];

    }

    this.numUsuarios = this.usuarios.length;
    for (let index = 0; index < this.usuarios.length; index++) {
      let user = this.usuarios[index];

    }
  }

  ngOnInit() {
  }

}
