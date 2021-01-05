import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotChordDirective } from './g2plot-chord.directive';


@NgModule({
  declarations: [G2plotChordDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotChordDirective]
})
export class G2plotChordModule { }
