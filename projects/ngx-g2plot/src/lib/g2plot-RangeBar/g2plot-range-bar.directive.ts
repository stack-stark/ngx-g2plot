import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { RangeBar, RangeBarConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRangeBar]'
})
export class G2plotRangeBarDirective implements AfterViewInit {

  @Input() options: RangeBarConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new RangeBar(hostElement, stark.options).render();
  }

}
