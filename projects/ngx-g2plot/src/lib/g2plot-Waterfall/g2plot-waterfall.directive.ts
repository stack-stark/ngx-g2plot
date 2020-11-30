/*
 * @Description: 
 * @Date: 2020-11-27 10:07:48
 * @LastEditors: tanmh
 * @LastEditTime: 2020-11-30 17:57:16
 */
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Waterfall, WaterfallOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotWaterfall]',
  exportAs: 'g2plotWaterfall'
})
export class G2plotWaterfallDirective implements AfterViewInit {

  @Input() options: WaterfallOptions;

  public instance: Waterfall;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Waterfall(hostElement, this.options);
    this.instance.render();
  }

  update(options: WaterfallOptions): void {
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

