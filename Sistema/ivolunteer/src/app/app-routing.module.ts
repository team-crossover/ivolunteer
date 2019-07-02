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
import { EditarEventoComponent } from './editar-evento/editar-evento.component';

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
    path: 'usuario/:id',
    component: PerfilComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'editar',
        component: EditarPerfilComponent,
        canActivate: [AuthGuard],
        data: {
          requiresRoles: ['voluntario', 'admin'],
        }
      }
    ]
  },
  {
    path: 'ongs',
    component: OngsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'filtrar',
        component: OngFiltroComponent
      }
    ]
  },
  {
    path: 'eventos',
    component: EventosComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'filtrar',
        component: EventoFiltroComponent
      },
      {
        path: 'add',
        component: AddEventoComponent,
        canActivate: [AuthGuard],
        data: {
          requiresRoles: ['ong'],
        }
      },
    ]
  },
  {
    path: 'evento/:id',
    component: VerEventoComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'editar',
        component: EditarEventoComponent,
        canActivate: [AuthGuard],
        data: {
          requiresRoles: ['ong', 'admin'],
        }
      },
      {
        path: 'excluir',
        component: ExcluirEventoComponent,
        canActivate: [AuthGuard],
        data: {
          requiresRoles: ['ong', 'admin'],
        }
      },
    ]
  },
  {
    path: 'ong/:id',
    component: PerfilOngComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'add-evento',
        component: AddEventoComponent,
        canActivate: [AuthGuard],
        data: {
          requiresRoles: ['ong']
        },
      },
      {
        path: 'add-post',
        component: AddPostagemComponent,
        canActivate: [AuthGuard],
        data: {
          requiresRoles: ['ong']
        },
      },
      {
        path: 'editar',
        component: EditarOngComponent,
        canActivate: [AuthGuard],
        data: {
          requiresRoles: ['ong', 'admin']
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
