import { Component, OnInit } from '@angular/core';
import { NovaOng, Ong, Usuario } from '../_models';
import { AuthenticationService, OngsService } from '../_services';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { PerfilOngComponent } from '../perfil-ong/perfil-ong.component';
import { ClrLoadingState } from '@clr/angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-editar-ong',
  templateUrl: './editar-ong.component.html',
  styleUrls: ['./editar-ong.component.scss']
})
export class EditarOngComponent implements OnInit {

  areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
  'Educação', 'Esportes', 'Idosos', 'Jovens',
  'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
  'Política', 'Refugiados', 'Saúde', 'Outras'];

  ong: Ong;
  novaOng: NovaOng = new NovaOng();
  error: string = null;
  loading: boolean = false;
  usuario: Usuario = new Usuario();

  idOng: number;

  submitBtnState = ClrLoadingState.DEFAULT;

  constructor(public ongsService: OngsService,
    public authService: AuthenticationService,
    public router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private perfilOng: PerfilOngComponent) {
    }

  ngOnInit() {
    this.idOng = this.perfilOng.id_ong;
    this.getUsuario();
    this.patchNovaOng();
  }

  patchNovaOng() {
    this.submitBtnState = ClrLoadingState.LOADING;
    this.ongsService.getOng(this.idOng).subscribe(data => {
      this.ong = data;
      this.novaOng.username = this.usuario.username;
      this.novaOng.areas = this.ong.areas;
      this.novaOng.dataFundacao = this.ong.dataFundacao;
      this.novaOng.descricao = this.ong.descricao;
      this.novaOng.doacoes = this.ong.doacoes;
      this.novaOng.email = this.ong.email;
      this.novaOng.endereco.uf = this.ong.endereco.uf;
      this.novaOng.endereco.bairro = this.ong.endereco.bairro;
      this.novaOng.endereco.cidade = this.ong.endereco.cidade;
      this.novaOng.endereco.cep = this.ong.endereco.cep;
      this.novaOng.endereco.complemento1 = this.ong.endereco.complemento1;
      this.novaOng.nome = this.ong.nome;
      this.novaOng.telefone = this.ong.telefone;
      this.novaOng.urlFacebook = this.ong.urlFacebook;
      this.novaOng.urlWebsite = this.ong.urlWebsite;
      this.novaOng.imgPerfil = this.ong.imgPerfil;
    });
  }

  getUsuario() {
    this.authService.currentUser.subscribe(data => {
      this.usuario = data;
    });
  }

  onSubmit() {
    this.submitBtnState = ClrLoadingState.LOADING;
    this.ongsService.updateMyOng(this.novaOng)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            this.submitBtnState = ClrLoadingState.SUCCESS;
            this.authService.logout();
            this.router.navigate(["/login"]);
            this.toastr.success('Atualizado cadastro de ONG');
          }
        },
        error => {
          this.submitBtnState = ClrLoadingState.DEFAULT;
          this.error = JSON.stringify(error);
          this.loading = false;
          this.toastr.error(this.error);
        });
  }

  imgChangeListener(imageInput): void {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.novaOng.imgPerfil = event.target.result;
    });
    reader.readAsDataURL(file);
  }
}
