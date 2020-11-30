/*
 * @Description: 
 * @Date: 2020-11-27 10:07:48
 * @LastEditors: tanmh
 * @LastEditTime: 2020-11-30 17:23:55
 */
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { StackedArea, StackedAreaOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedArea]',
  exportAs: 'g2plotStackedArea'
})
export class G2plotStackedAreaDirective implements AfterViewInit {

  @Input() options: StackedAreaOptions;

  public instance: StackedArea;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new StackedArea(hostElement, this.options);
    this.instance.render();
  }

  update(options: StackedAreaOptions): void {
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

