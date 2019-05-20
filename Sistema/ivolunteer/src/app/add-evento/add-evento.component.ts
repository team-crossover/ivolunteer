import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.scss']
})
export class AddEventoComponent implements OnInit {

  name: string = '';

  constructor() { }

  ngOnInit() {
  }

  public adicionaFuncaoTbl() {
    alert(this.name);
  }
}
