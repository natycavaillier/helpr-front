import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LoaderComponent } from './components/loader/loader.component';
import { StatusChipComponent } from './components/status-chip/status-chip.component';
import { PrioridadeChipComponent } from './components/prioridade-chip/prioridade-chip.component';



@NgModule({
  declarations: [
    LoaderComponent,
    StatusChipComponent,
    PrioridadeChipComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoaderComponent,
    PrioridadeChipComponent,
    StatusChipComponent
  ]
})
export class SharedModule { }
