/*
 * @Description:
 * @Date: 2020-12-02 09:48:38
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-02 09:55:29
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotBidirectionalBarDirective } from './g2plot-bidirectional-bar.directive';

@NgModule({
  declarations: [G2plotBidirectionalBarDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotBidirectionalBarDirective]
})
export class G2plotBidirectionalBarModule { }
