/*
 * @Description: 
 * @Date: 2020-11-27 10:07:48
 * @LastEditors: tanmh
 * @LastEditTime: 2020-11-30 17:02:21
 */
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Bar, BarOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotBar]',
  exportAs: 'g2plotBar'
})
export class G2plotBarDirective implements AfterViewInit {

  @Input() options: BarOptions;

  public instance: Bar;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Bar(hostElement, this.options);
    this.instance.render();
  }

  update(options: BarOptions): void {
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
