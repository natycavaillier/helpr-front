import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosRoutingModule } from './tecnicos-routing.module';
import { TecnicosComponent } from './tecnicos.component';
import { MaterialModule } from '../shared/material.module';
import { TecnicoUpdateComponent } from './components/tecnico-update/tecnico-update.component';
import { TecnicoCreateComponent } from './components/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './components/tecnico-delete/tecnico-delete.component';


@NgModule({
  declarations: [
    TecnicosComponent,
    TecnicoUpdateComponent,
    TecnicoCreateComponent,
    TecnicoDeleteComponent
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule,
    MaterialModule
  ]
})
export class TecnicosModule { }
