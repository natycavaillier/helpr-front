import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { MaterialModule } from '../shared/material.module';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientesComponent,
    ClienteUpdateComponent,
    ClienteCreateComponent,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
