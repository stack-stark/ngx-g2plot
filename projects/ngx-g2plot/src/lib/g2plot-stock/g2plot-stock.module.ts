import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotStockDirective } from './g2plot-stock.directive';



@NgModule({
  declarations: [G2plotStockDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotStockDirective]
})
export class G2plotStockModule { }
