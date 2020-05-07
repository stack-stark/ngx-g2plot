import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { StackedColumn, StackedColumnConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedColumn]'
})
export class G2plotStackedColumnDirective implements AfterViewInit {

  @Input() options: StackedColumnConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new StackedColumn(hostElement, stark.options).render();
  }

}
