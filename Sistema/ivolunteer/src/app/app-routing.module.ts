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
import { EditarOngComponent } from './editar-ong/editar-ong.component';
import { PerfilOngComponent } from './perfil-ong/perfil-ong.component';
import { VerEventoComponent } from './ver-evento/ver-evento.component';
import { AddPostagemComponent } from './add-postagem/add-postagem.component';

const routes: Routes = [
  {
    path: 'timeline', component: TimelineComponent,
    children: [
      { path: 'filtrar', component: OngFiltroComponent },
      { path: 'addPostagem', component: AddPostagemComponent }
    ]
  },
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
      { path: 'ver-evento', redirectTo: '/ver-evento', pathMatch: 'full' }
    ]
  },
  { path: 'add-ong', component: AddOngComponent },
  { path: 'add-voluntario', component: AddVoluntarioComponent },
  { path: '', redirectTo: '/timeline', pathMatch: 'full' },
  {
    path: 'eventos', component: EventosComponent,
    children: [
      { path: 'filtrar', component: OngFiltroComponent },
      { path: 'ver-evento/:id', component: VerEventoComponent }
    ]
  },
  { path: 'evento/:id', component: VerEventoComponent },
  {
    path: 'ong/:id', component: PerfilOngComponent,
    children: [
      { path: 'editar', component: EditarOngComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
