import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotTinyColumnDirective } from './g2plot-tiny-column.directive';



@NgModule({
  declarations: [G2plotTinyColumnDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotTinyColumnDirective]
})
export class G2plotTinyColumnModule { }
