
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { StackedBar, StackedBarConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedBar]'
})
export class G2plotStackedBarDirective implements AfterViewInit {

  @Input() options: StackedBarConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new StackedBar(hostElement, stark.options).render();
  }

}
