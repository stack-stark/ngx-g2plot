import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotFunnelDirective } from './g2plot-funnel.directive';

@NgModule({
  declarations: [G2plotFunnelDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotFunnelDirective]
})
export class G2plotFunnelModule { }
