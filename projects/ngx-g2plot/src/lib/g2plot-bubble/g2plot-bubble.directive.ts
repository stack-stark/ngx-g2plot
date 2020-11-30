/*
 * @Description: 
 * @Date: 2020-11-27 10:07:48
 * @LastEditors: tanmh
 * @LastEditTime: 2020-11-30 17:24:04
 */

import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Bubble, BubbleOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotBubble]',
  exportAs: 'g2plotBubble'
})
export class G2plotBubbleDirective implements AfterViewInit {

  @Input() options: BubbleOptions;

  public instance: Bubble;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Bubble(hostElement, this.options);
    this.instance.render();
  }

  update(options: BubbleOptions): void {
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

