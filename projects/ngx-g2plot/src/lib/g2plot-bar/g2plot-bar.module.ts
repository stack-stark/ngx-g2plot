/*
 * @Description: bar模块
 * @Date: 2020-11-30 18:10:42
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 10:14:34
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotBarDirective } from './g2plot-bar.directive';

@NgModule({
  declarations: [G2plotBarDirective],
  imports: [
    CommonModule,
  ],
  exports:[G2plotBarDirective]
})
export class G2plotBarModule { }
