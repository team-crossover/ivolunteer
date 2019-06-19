import { Component, OnInit } from '@angular/core';
import { NovoVoluntario } from '../_models';
import { first } from 'rxjs/operators';
import { AuthenticationService, VoluntariosService } from '../_services';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-voluntario',
  templateUrl: './add-voluntario.component.html',
  styleUrls: ['./add-voluntario.component.scss']
})
export class AddVoluntarioComponent implements OnInit {

  areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
    'Educação', 'Esportes', 'Idosos', 'Jovens',
    'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
    'Política', 'Refugiados', 'Saúde', 'Outras'];

  novoVoluntario: NovoVoluntario = new NovoVoluntario();
  error: string = null;
  loading: boolean = false;

  constructor(public voluntariosService: VoluntariosService,
    public authService: AuthenticationService,
    public router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.voluntariosService.createVoluntario(this.novoVoluntario)
      .pipe(first())
      .subscribe(
        data => {
          if (data)
            this.router.navigate(["/login"]);
            this.toastr.success('Adicionado cadastro de voluntário');
        },
        error => {
          this.error = JSON.stringify(error);
          this.loading = false;
          this.toastr.error(this.error);
        });
  }

}
