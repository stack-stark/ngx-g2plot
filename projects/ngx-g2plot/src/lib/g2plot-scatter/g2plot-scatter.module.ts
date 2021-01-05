import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotScatterDirective } from './g2plot-scatter.directive';

@NgModule({
  declarations: [G2plotScatterDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotScatterDirective]
})
export class G2plotScatterModule { }
