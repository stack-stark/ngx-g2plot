/*
 * @Description:
 * @Date: 2020-12-01 10:49:47
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 10:51:22
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotWordCloudDirective } from './g2plot-word-cloud.directive';

@NgModule({
  declarations: [G2plotWordCloudDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotWordCloudDirective]
})
export class G2plotWordCloudModule { }
