import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotSankeyDirective } from './g2plot-sankey.directive';

@NgModule({
  declarations: [G2plotSankeyDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotSankeyDirective]
})
export class G2plotSankeyModule { }
