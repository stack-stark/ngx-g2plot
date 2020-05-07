import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { GroupedBar, GroupedBarConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGroupedBar]'
})
export class G2plotGroupedBarDirective implements AfterViewInit {

  @Input() options: GroupedBarConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new GroupedBar(hostElement, stark.options).render();
  }

}
