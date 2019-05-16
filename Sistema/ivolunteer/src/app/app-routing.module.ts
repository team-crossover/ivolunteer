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

const routes: Routes = [
  { path: 'timeline', component: TimelineComponent
  },
  {
    path: 'ongs', component: OngsComponent,
    children: [
      { path: 'filtrar', component: OngFiltroComponent },
      { path: ':id', component: PerfilOngComponent, 
        children: [
          { path: 'editar', component: EditarOngComponent }
        ]
      }
    ]
  },
  { path: 'eventos', component: EventosComponent
  },
  {
    path: 'usuario/:id', component: PerfilComponent,
    children: [
      { path: 'editar', component: EditarPerfilComponent }
    ]
  },
  { path: 'add-ong', component: AddOngComponent },
  { path: 'add-voluntario', component: AddVoluntarioComponent },
  { path: '', redirectTo: '/timeline', pathMatch: 'full' },
  { path: 'evento/:id', component: VerEventoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
