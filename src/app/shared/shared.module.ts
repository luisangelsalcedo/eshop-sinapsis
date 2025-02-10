import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinerComponent } from './components/spiner/spiner.component';
import { LogoSinapsisComponent } from './components/logo-sinapsis/logo-sinapsis.component';



@NgModule({
  declarations: [
    SpinerComponent,
    LogoSinapsisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinerComponent,
    LogoSinapsisComponent
  ]
})
export class SharedModule { }
