import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OngsComponent } from './ongs/ongs.component';
import { EventosComponent } from './eventos/eventos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ongs', component: OngsComponent },
  { path: 'eventos', component: EventosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
