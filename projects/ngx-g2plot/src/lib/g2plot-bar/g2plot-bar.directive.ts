import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import { Bar, BarConfig } from '@antv/g2plot';

@Directive({
  selector: '[starkG2plotBar]'
})
export class G2plotBarDirective implements AfterViewInit {

  @Input() options: BarConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Bar(hostElement, stark.options).render();
  }
}
