
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Liquid, LiquidConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotLiquid]'
})
export class G2plotLiquidDirective implements AfterViewInit {

  @Input() options: LiquidConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Liquid(hostElement, stark.options).render();
  }

}
