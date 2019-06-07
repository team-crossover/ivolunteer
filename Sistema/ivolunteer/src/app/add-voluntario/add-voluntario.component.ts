import { Component, OnInit } from '@angular/core';
import { NovoVoluntario } from '../_models';
import { UsersService } from '../_services/users.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(public usersService: UsersService,
    public authService: AuthenticationService,
    public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.usersService.createVoluntario(this.novoVoluntario)
      .pipe(first())
      .subscribe(
        data => {
          if (data)
            this.router.navigate(["/login"]);
        },
        error => {
          this.error = JSON.stringify(error);
          this.loading = false;
        });
  }

}
