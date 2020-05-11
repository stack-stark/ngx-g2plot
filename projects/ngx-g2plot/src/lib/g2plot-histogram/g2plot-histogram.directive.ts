import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Histogram, HistogramConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotHistogram]'
})
export class G2plotHistogramDirective implements AfterViewInit {

  @Input() options: HistogramConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Histogram(hostElement, stark.options).render();
  }

}
