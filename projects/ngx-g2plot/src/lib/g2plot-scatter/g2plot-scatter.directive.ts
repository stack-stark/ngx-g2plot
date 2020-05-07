
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Scatter, ScatterConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotScatter]'
})
export class G2plotScatterDirective implements AfterViewInit {

  @Input() options: ScatterConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Scatter(hostElement, stark.options).render();
  }

}
