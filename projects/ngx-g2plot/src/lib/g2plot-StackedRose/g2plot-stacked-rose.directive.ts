import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { StackedRose, StackedRoseConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedRose]'
})
export class G2plotStackedRoseDirective implements AfterViewInit {

  @Input() options: StackedRoseConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new StackedRose(hostElement, stark.options).render();
  }

}

