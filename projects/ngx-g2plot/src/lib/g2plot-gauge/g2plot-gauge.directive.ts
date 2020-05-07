import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Gauge } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGauge]'
})
export class G2plotGaugeDirective implements AfterViewInit {

  @Input() options: object;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Gauge(hostElement, stark.options).render();
  }

}
