import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Waterfall, WaterfallConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotWaterfall]'
})
export class G2plotWaterfallDirective implements AfterViewInit {

  @Input() options: WaterfallConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Waterfall(hostElement, stark.options).render();
  }

}
