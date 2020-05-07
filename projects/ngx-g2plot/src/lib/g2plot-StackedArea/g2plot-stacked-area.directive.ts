import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { StackedArea, StackedAreaConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedArea]'
})
export class G2plotStackedAreaDirective implements AfterViewInit {

  @Input() options: StackedAreaConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new StackedArea(hostElement, stark.options).render();
  }

}
