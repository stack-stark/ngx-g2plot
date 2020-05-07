import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Line } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotLine]'
})
export class G2plotLineDirective implements AfterViewInit {

  @Input() options: object;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Line(hostElement, stark.options).render();
  }

}
