import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Calendar, CalendarConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotCalendar]',
  exportAs: 'g2plotCalendar'
})
export class G2plotCalendarDirective implements AfterViewInit {

  @Input() options: CalendarConfig;

  public instance: Calendar;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Calendar(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: CalendarConfig): void {
    this.instance.updateConfig(options);
    this.instance.render();
  }

  changeData(newData: Array<object>): void {
    this.instance.changeData(newData);
  }

  repaint(): void {
    this.instance.repaint();
  }

  destroy(): void {
    this.instance.destroy();
  }

}


