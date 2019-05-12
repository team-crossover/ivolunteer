import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventosComponent } from './eventos/eventos.component';
import { OngsComponent } from './ongs/ongs.component';
import { OngCardComponent } from './ong-card/ong-card.component';
import { AddOngComponent } from './add-ong/add-ong.component';
import { AddVoluntarioComponent } from './add-voluntario/add-voluntario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { OngFiltroComponent } from './ong-filtro/ong-filtro.component';
import { TimelinePostComponent } from './timeline-post/timeline-post.component';
import { TimelineEventoComponent } from './timeline-evento/timeline-evento.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    EventosComponent,
    OngsComponent,
    OngCardComponent,
    OngFiltroComponent,
    AddOngComponent,
    AddVoluntarioComponent,
    PerfilComponent,
    EditarPerfilComponent,
    TimelinePostComponent,
    TimelineEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
