
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Calendar, CalendarConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotCalendar]'
})
export class G2plotCalendarDirective implements AfterViewInit {

  @Input() options: CalendarConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Calendar(hostElement, stark.options).render();
  }

}
