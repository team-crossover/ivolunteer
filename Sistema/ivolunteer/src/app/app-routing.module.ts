import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
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
import { EventoFiltroComponent } from './evento-filtro/evento-filtro.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'filtrar',
        component: OngFiltroComponent
      },
      {
        path: 'addPostagem',
        component: AddPostagemComponent
      },
      {
        path: 'evento/:id',
        component: VerEventoComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: {
      requiresGuest: true,
    },
  },
  {
    path: 'cadastrar/ong',
    component: AddOngComponent,
    canActivate: [AuthGuard],
    data: {
      requiresGuest: true,
    },
  },
  {
    path: 'cadastrar/voluntario',
    component: AddVoluntarioComponent,
    canActivate: [AuthGuard],
    data: {
      requiresGuest: true,
    }
  },
  {
    path: 'ongs',
    component: OngsComponent,
    children: [
      {
        path: 'filtrar',
        component: OngFiltroComponent
      },
      {
        path: 'ong',
        redirectTo: '/ong/:id',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'usuario/:id', component: PerfilComponent,
    children: [
      { path: 'ver-evento', redirectTo: '/ver-evento', pathMatch: 'full' },
      { path: 'editar', component: EditarPerfilComponent }
    ]
  },
  {
    path: 'eventos', component: EventosComponent,
    children: [
      { path: 'evento/:id', component: VerEventoComponent },
      { path: 'add', component: AddEventoComponent },
      { path: 'filtrar', component: EventoFiltroComponent },
    ]
  },
  {
    path: 'evento/:id', component: VerEventoComponent,
    children: [
      { path: 'ong/:id', component: PerfilOngComponent },
      { path: 'editar', component: AddEventoComponent },
      { path: 'excluir', component: ExcluirEventoComponent },
    ]
  },
  {
    path: 'ong/:id', component: PerfilOngComponent,
    children: [
      {
        path: 'editar',
        component: EditarOngComponent,
        canActivate: [AuthGuard],
        data: {
          requiresRoles: ['ong']
        },
      },
      { path: 'usuario', redirectTo: 'usuario/:id', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
