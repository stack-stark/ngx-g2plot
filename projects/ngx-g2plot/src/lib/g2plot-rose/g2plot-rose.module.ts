/*
 * @Description:
 * @Date: 2020-12-01 10:46:47
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 11:03:10
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotRoseDirective } from './g2plot-rose.directive';

@NgModule({
  declarations: [G2plotRoseDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotRoseDirective]
})
export class G2plotRoseModule { }
