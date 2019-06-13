import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ong-filtro',
  templateUrl: './ong-filtro.component.html',
  styleUrls: ['./ong-filtro.component.scss']
})
export class OngFiltroComponent implements OnInit {

  areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
      'Educação', 'Esportes', 'Idosos', 'Jovens',
      'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
      'Política', 'Refugiados', 'Saúde', 'Outras'];
  
  constructor() { }

  ngOnInit() {
  }

}
