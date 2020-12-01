/*
 * @Description:
 * @Date: 2020-11-30 18:10:53
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 10:34:40
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotBulletDirective } from './g2plot-bullet.directive';

@NgModule({
  declarations: [G2plotBulletDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotBulletDirective]
})
export class G2plotBulletModule { }
