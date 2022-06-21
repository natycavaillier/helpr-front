import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosRoutingModule } from './tecnicos-routing.module';
import { TecnicosComponent } from './tecnicos.component';
import { MaterialModule } from '../shared/material.module';
import { TecnicoUpdateComponent } from './components/tecnico-update/tecnico-update.component';
import { TecnicoCreateComponent } from './components/tecnico-create/tecnico-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TecnicosComponent,
    TecnicoUpdateComponent,
    TecnicoCreateComponent,
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class TecnicosModule {}
