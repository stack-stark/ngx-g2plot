/*
 * @Description: 
 * @Date: 2020-11-27 10:07:48
 * @LastEditors: tanmh
 * @LastEditTime: 2020-11-30 18:02:57
 */
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Rose, RoseOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRose]',
  exportAs: 'g2plotRose'
})
export class G2plotRoseDirective implements AfterViewInit {

  @Input() options: RoseOptions;

  public instance: Rose;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Rose(hostElement, this.options);
    this.instance.render();
  }

  update(options: RoseOptions): void {
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
