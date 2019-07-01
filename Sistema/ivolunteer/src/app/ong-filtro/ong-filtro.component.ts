import { Component, OnInit } from '@angular/core';
import { OngsService } from '../_services';
import { Ong } from '../_models';

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
  
  ongFiltro: Ong[] = [];
  ong: Ong = new Ong();

  constructor(private ongService: OngsService) { }

  ngOnInit() {
  }

  getOngsByNome() {
    this.ongService.getOngByNome(this.ong.nome).subscribe(data => {
      this.ongFiltro = data;
    });
  }

  getOngsByArea() {
    this.ongService.getOngByAreas(this.ong.areas).subscribe(data => {
      this.ongFiltro = data;
    });
  }

}
