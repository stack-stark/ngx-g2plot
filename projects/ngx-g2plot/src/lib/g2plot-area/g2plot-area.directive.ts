import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Area } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotArea]'
})
export class G2plotAreaDirective implements AfterViewInit {

  @Input() options: object;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Area(hostElement, stark.options).render();
  }

}
