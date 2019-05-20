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
import { ExcluirEventoComponent } from './excluir-evento/excluir-evento.component';
import { AddEventoComponent } from './add-evento/add-evento.component';

const routes: Routes = [
  { path: 'timeline', component: TimelineComponent,
    children: [
      { path: 'filtrar', component: OngFiltroComponent },
      { path: 'addPostagem', component: AddPostagemComponent },
      { path: 'evento/:id', component: VerEventoComponent }
    ]
  },
  { path: 'ongs', component: OngsComponent,
    children: [
      { path: 'filtrar', component: OngFiltroComponent },
      { path: 'ong', redirectTo: '/ong/:id', pathMatch: 'full'}
    ]
  },
  { path: 'usuario/:id', component: PerfilComponent,
    children: [
      { path: 'ver-evento', redirectTo: '/ver-evento', pathMatch: 'full' }
    ]
  },
  { path: 'add-ong', component: AddOngComponent },
  { path: 'add-voluntario', component: AddVoluntarioComponent },
  { path: '', redirectTo: '/timeline', pathMatch: 'full' },
  { path: 'eventos', component: EventosComponent,
    children: [
      { path: 'filtrar', component: OngFiltroComponent },
      { path: 'evento/:id', component: VerEventoComponent }
    ]
  },
  { path: 'evento/:id', component: VerEventoComponent,
    children: [
      { path: 'excluir', component: ExcluirEventoComponent },
      { path: 'editar', component: AddEventoComponent },
      { path: 'ong/:id', component: PerfilOngComponent }
    ]
  },
  { path: 'ong/:id', component: PerfilOngComponent,
    children: [
      { path: 'editar', component: EditarOngComponent },
      { path: 'usuario', redirectTo: 'usuario/:id', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
