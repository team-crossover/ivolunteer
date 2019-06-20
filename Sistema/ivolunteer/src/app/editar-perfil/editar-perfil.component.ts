import { Component, OnInit } from '@angular/core';
import { NovoVoluntario, Voluntario, Usuario } from '../_models';
import { AuthenticationService, VoluntariosService } from '../_services';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  date = null;

  areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
    'Educação', 'Esportes', 'Idosos', 'Jovens',
    'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
    'Política', 'Refugiados', 'Saúde', 'Outras'];

  novoVoluntario: NovoVoluntario = new NovoVoluntario();
  voluntario: Voluntario = new Voluntario();
  usuario: Usuario = new Usuario();
  error: string = null;
  loading: boolean = false;
  idVoluntario: number = 0;

  constructor(public voluntarioService: VoluntariosService,
    public authService: AuthenticationService,
    public router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private perfilService: PerfilComponent) { }

  ngOnInit() {
    this.idVoluntario = this.perfilService.idVoluntario;
    this.getUsuario();
    this.getVoluntarioPatch(this.idVoluntario);
  }

  getVoluntarioPatch(id: number) {
    this.voluntarioService.getVoluntario(id).subscribe(data => {
      this.voluntario = data;
      console.log("VOLUNTARIO: " + JSON.stringify(this.voluntario));

      this.novoVoluntario.username = this.usuario.username;
      this.novoVoluntario.nome = this.voluntario.nome;
      this.novoVoluntario.email = this.voluntario.email;
      this.novoVoluntario.areasInteressadas = this.voluntario.areasInteressadas;
      this.novoVoluntario.dataNascimento = this.voluntario.dataNascimento;
    });
  }

  getUsuario() {
    this.authService.currentUser.subscribe(data => {
      this.usuario = data;
<<<<<<< HEAD
      console.log("USUARIO: " + JSON.stringify(this.usuario));
=======
>>>>>>> 067a6b246d3ecf63c569c30bb1444e6b28381da1
    });
  }

  onSubmit() {
    this.authService.currentUser.subscribe(data => {
      console.log("USER: " + JSON.stringify(data));
    });
    console.log(this.novoVoluntario);
    this.voluntarioService.updateMyVoluntario(this.novoVoluntario)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            this.authService.logout();
            this.router.navigate(["/login"]);
            this.toastr.success('Atualizado cadastro de voluntário');
          }
        },
        error => {
          this.error = JSON.stringify(error);
          this.loading = false;
          this.toastr.error(this.error);
        });
  }

}
