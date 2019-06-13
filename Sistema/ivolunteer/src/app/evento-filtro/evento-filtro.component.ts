import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-filtro',
  templateUrl: './evento-filtro.component.html',
  styleUrls: ['./evento-filtro.component.scss']
})
export class EventoFiltroComponent implements OnInit {

  areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
    'Educação', 'Esportes', 'Idosos', 'Jovens',
    'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
    'Política', 'Refugiados', 'Saúde', 'Outras'];

  constructor() { }

  ngOnInit() {
  }

}
