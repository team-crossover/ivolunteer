import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';
import { ActivatedRoute } from '@angular/router';
import { VoluntariosService } from '../_services';
import { Voluntario } from '../_models';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  voluntario: Voluntario;

  idVoluntario: number;

  constructor(
    public auth: AuthenticationService,
    public voluntarioService: VoluntariosService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.idVoluntario = params['id'];
      }
    });
  }

  ngOnInit() {
    this.loadVoluntario(this.idVoluntario);
  }

  loadVoluntario(id: number) {
    this.voluntarioService.getVoluntario(id).subscribe(data => {
      this.voluntario = data;
    })
  }

}
