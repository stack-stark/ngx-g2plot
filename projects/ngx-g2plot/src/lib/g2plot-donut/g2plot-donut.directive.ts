import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Donut, DonutConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotDonut]'
})
export class G2plotDonutDirective implements AfterViewInit {

  @Input() options: DonutConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Donut(hostElement, stark.options).render();
  }

}
