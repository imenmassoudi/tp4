import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './application/parent/parent.component';
import { EnfantComponent } from './application/enfant/enfant.component';
import { TableauComponent } from './tableau/tableau.component';
import { NombreComponent } from './nombre/nombre.component';
import { MaterielComponent } from './ex2/materiel/materiel.component';
import { MaterielListComponent } from './ex2/materiel-list/materiel-list.component';
import { NotesComponent } from './notes/notes.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex3MaterielComponent } from './ex3-materiel/ex3-materiel.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    EnfantComponent,
    TableauComponent,
    NombreComponent,
    MaterielComponent,
    MaterielListComponent,
    NotesComponent,
    Ex3Component,
    Ex3MaterielComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
