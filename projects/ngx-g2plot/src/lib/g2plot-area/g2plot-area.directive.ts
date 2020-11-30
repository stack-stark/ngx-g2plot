/*
 * @Description: 
 * @Date: 2020-11-27 10:07:48
 * @LastEditors: tanmh
 * @LastEditTime: 2020-11-30 17:23:32
 */
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Area, AreaOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotArea]',
  exportAs: 'g2plotArea'
})
export class G2plotAreaDirective implements AfterViewInit {

  @Input() options: AreaOptions;

  public instance: Area;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Area(hostElement, this.options);
    this.instance.render();
  }

  update(options: AreaOptions): void {
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
