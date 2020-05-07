import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Pie, PieConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotPie]'
})
export class G2plotPieDirective implements AfterViewInit {

  @Input() options: PieConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Pie(hostElement, stark.options).render();
  }

}
