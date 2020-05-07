import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Rose, RoseConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRose]'
})
export class G2plotRoseDirective implements AfterViewInit {

  @Input() options: RoseConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Rose(hostElement, stark.options).render();
  }

}
