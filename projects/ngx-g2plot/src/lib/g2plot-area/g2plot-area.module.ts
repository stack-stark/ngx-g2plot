/*
 * @Description: 
 * @Date: 2020-11-30 18:06:42
 * @LastEditors: tanmh
 * @LastEditTime: 2020-11-30 18:08:01
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotAreaDirective } from './g2plot-area.directive';

@NgModule({
  declarations: [G2plotAreaDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotAreaDirective]
})
export class G2plotAreaModule { }
