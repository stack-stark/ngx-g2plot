/*
 * @Description: 
 * @Date: 2020-11-27 10:07:48
 * @LastEditors: tanmh
 * @LastEditTime: 2020-11-30 18:02:47
 */
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Pie, PieOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotPie]',
  exportAs: 'g2plotPie'
})
export class G2plotPieDirective implements AfterViewInit {

  @Input() options: PieOptions;

  public instance: Pie;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Pie(hostElement, this.options);
    this.instance.render();
  }

  update(options: PieOptions): void {
    this.instance.update(options);
    this.instance.render();
  }

  changeData(newData: Array<object>): void {
    this.instance.changeData(newData);
  }

  destroy(): void {
    this.instance.destroy();
  }

}


