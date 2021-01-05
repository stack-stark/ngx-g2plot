import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotBoxDirective } from './g2plot-box.directive';



@NgModule({
  declarations: [G2plotBoxDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotBoxDirective]
})
export class G2plotBoxModule { }
