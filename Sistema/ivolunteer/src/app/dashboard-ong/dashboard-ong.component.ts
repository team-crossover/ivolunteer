import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-ong',
  templateUrl: './dashboard-ong.component.html',
  styleUrls: ['./dashboard-ong.component.scss']
})
export class DashboardOngComponent implements OnInit {

  eventos: string[] = ['Feira de Adoção', 'Arrecadação', 'Visita ao Abrigo', 'Jantar beneficiente'];
  numEventos: number;
  postagens: string[] = ['Novidades', 'Meta atingida', 'Novo Local'];
  numPostagens: number;
  numVoluntarios: number;
  data: String = "23/05/2019";

  constructor() {
    this.numEventos = this.eventos.length;
    this.numPostagens = this.postagens.length;
    this.numVoluntarios = this.numEventos * 5;
  }

  ngOnInit() {
  }

}
