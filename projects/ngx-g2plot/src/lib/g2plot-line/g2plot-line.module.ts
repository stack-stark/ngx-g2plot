/*
 * @Description:
 * @Date: 2020-12-01 10:46:00
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 13:53:22
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotLineDirective } from './g2plot-line.directive';

@NgModule({
  declarations: [G2plotLineDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotLineDirective]
})
export class G2plotLineModule { }
