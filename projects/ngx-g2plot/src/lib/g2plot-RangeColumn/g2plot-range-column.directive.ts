import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { RangeColumn, RangeColumnConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRangeColumn]'
})
export class G2plotRangeColumnDirective implements AfterViewInit {

  @Input() options: RangeColumnConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new RangeColumn(hostElement, stark.options).render();
  }

}
