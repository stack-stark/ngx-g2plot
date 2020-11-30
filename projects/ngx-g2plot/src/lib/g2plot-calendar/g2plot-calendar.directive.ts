/*
 * @Description: 
 * @Date: 2020-11-27 10:07:48
 * @LastEditors: tanmh
 * @LastEditTime: 2020-11-30 17:24:20
 */
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Calendar, CalendarOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotCalendar]',
  exportAs: 'g2plotCalendar'
})
export class G2plotCalendarDirective implements AfterViewInit {

  @Input() options: CalendarOptions;

  public instance: Calendar;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Calendar(hostElement, this.options);
    this.instance.render();
  }

  update(options: CalendarOptions): void {
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


