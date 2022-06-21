import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'new', component: ClienteCreateComponent },
  { path: 'edit/:id', component: ClienteUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
