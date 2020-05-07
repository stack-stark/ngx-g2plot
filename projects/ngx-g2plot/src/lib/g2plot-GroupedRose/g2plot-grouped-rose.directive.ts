
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { GroupedRose, GroupedRoseConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGroupedRose]'
})
export class G2plotGroupedRoseDirective implements AfterViewInit {

  @Input() options: GroupedRoseConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new GroupedRose(hostElement, stark.options).render();
  }

}
