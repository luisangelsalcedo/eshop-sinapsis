import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinerComponent } from './components/spiner/spiner.component';
import { LogoSinapsisComponent } from './components/logo-sinapsis/logo-sinapsis.component';
import { CustomModalComponent } from './components/modal/custom-modal.component';



@NgModule({
  declarations: [
    SpinerComponent,
    LogoSinapsisComponent,
    CustomModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinerComponent,
    LogoSinapsisComponent,
    CustomModalComponent
  ]
})
export class SharedModule { }
