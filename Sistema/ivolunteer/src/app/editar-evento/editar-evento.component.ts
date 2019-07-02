import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';
import { OngsService, AuthenticationService } from '../_services';
import { ToastrService } from 'ngx-toastr';
import { NovoEvento } from '../_models/novo-evento';
import { Usuario } from '../_models';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss']
})
export class EditarEventoComponent implements OnInit {

  evento: Event;
  novoEvento: NovoEvento = new NovoEvento();
  error: string = null;
  loading: boolean = false;
  usuario: Usuario = new Usuario();

  idEvento: number;

  submitBtnState = ClrLoadingState.DEFAULT;

  constructor(public ongsService: OngsService,
    public authService: AuthenticationService,
    public router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute, ) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.idEvento = params['id'];
      }
    })
  }

  ngOnInit() {
    //this.idOng = this.perfilOng.id_ong;
    // this.getUsuario();
    // this.patchNovaOng();
  }

}
