import { Component, OnInit } from '@angular/core';
import { NovaOng } from '../_models';
import { AuthenticationService, OngsService } from '../_services';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

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
    public router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.ongsService.createOng(this.novaOng)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            this.router.navigate(["/login"]);
            this.toastr.success('ONG cadastrada');
          }
        },
        error => {
          this.error = JSON.stringify(error);
          this.loading = false;
          this.toastr.error(this.error);
        });
  }

}
