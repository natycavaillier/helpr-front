import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { MaterialModule } from '../shared/material.module';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente-delete/cliente-delete.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClienteUpdateComponent,
    ClienteCreateComponent,
    ClienteDeleteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule
  ]
})
export class ClientesModule { }
