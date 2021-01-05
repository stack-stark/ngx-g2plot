import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotTreemapDirective } from './g2plot-treemap.directive';



@NgModule({
  declarations: [G2plotTreemapDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotTreemapDirective]
})
export class G2plotTreemapModule { }
