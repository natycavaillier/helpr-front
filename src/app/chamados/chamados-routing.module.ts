import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadosComponent } from './chamados.component';
import { ChamadoCreateComponent } from './components/chamado-create/chamado-create.component';
import { ChamadoDetailComponent } from './components/chamado-detail/chamado-detail.component';
import { ChamadoUpdateComponent } from './components/chamado-update/chamado-update.component';

const routes: Routes = [
  { path: '', component: ChamadosComponent },
  { path: 'new', component: ChamadoCreateComponent },
  { path: ':id', component: ChamadoDetailComponent },
  { path: 'edit/:id', component: ChamadoUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChamadosRoutingModule {}
