import { Component, OnInit } from '@angular/core';
import { NovaOng } from '../_models';
import { AuthenticationService, OngsService } from '../_services';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-ong',
  templateUrl: './add-ong.component.html',
  styleUrls: ['./add-ong.component.scss']
})
export class AddOngComponent implements OnInit {

  areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
    'Educação', 'Esportes', 'Idosos', 'Jovens',
    'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
    'Política', 'Refugiados', 'Saúde', 'Outras'];

  novaOng: NovaOng = new NovaOng();
  error: string = null;
  loading: boolean = false;

  constructor(public ongsService: OngsService,
    public authService: AuthenticationService,
    public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ongsService.createOng(this.novaOng)
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
