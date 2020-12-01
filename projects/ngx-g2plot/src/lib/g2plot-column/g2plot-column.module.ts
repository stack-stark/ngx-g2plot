/*
 * @Description:
 * @Date: 2020-11-30 18:11:07
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 10:36:53
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotColumnDirective } from './g2plot-column.directive';

@NgModule({
  declarations: [G2plotColumnDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotColumnDirective]
})
export class G2plotColumnModule { }
