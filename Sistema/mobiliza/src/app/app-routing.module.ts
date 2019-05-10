import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OngsComponent } from './ongs/ongs.component';
import { EventosComponent } from './eventos/eventos.component';
import { AddOngComponent } from './add-ong/add-ong.component';
import { AddVoluntarioComponent } from './add-voluntario/add-voluntario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ongs', component: OngsComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'usuario/:id', component: PerfilComponent ,
    children: [
      { path: 'editar', component: EditarPerfilComponent }
    ]
  },
  { path: 'add-ong', component: AddOngComponent },
  { path: 'add-voluntario', component: AddVoluntarioComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
