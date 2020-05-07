import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Column, ColumnConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotColumn]'
})
export class G2plotColumnDirective implements AfterViewInit {

  @Input() options: ColumnConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Column(hostElement, stark.options).render();
  }

}
