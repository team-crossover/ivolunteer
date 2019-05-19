import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineComponent } from './timeline/timeline.component';
import { OngsComponent } from './ongs/ongs.component';
import { EventosComponent } from './eventos/eventos.component';
import { AddOngComponent } from './add-ong/add-ong.component';
import { AddVoluntarioComponent } from './add-voluntario/add-voluntario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { OngFiltroComponent } from './ong-filtro/ong-filtro.component';

const routes: Routes = [
  { path: 'timeline', component: TimelineComponent },
  {
    path: 'ongs', component: OngsComponent,
    children: [
      { path: 'filtrar', component: OngFiltroComponent }
    ]
  },
  { path: 'eventos', component: EventosComponent },
  {
    path: 'usuario/:id', component: PerfilComponent,
    children: [
      { path: 'editar', component: EditarPerfilComponent }
    ]
  },
  { path: 'add-ong', component: AddOngComponent },
  { path: 'add-voluntario', component: AddVoluntarioComponent },
  { path: '', redirectTo: '/timeline', pathMatch: 'full' },
  {
    path: 'eventos', component: EventosComponent,
    children: [
      { path: 'filtrar', component: OngFiltroComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
