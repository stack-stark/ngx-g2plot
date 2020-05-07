
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { GroupedColumn, GroupedColumnConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGroupedColumn]'
})
export class G2plotGroupedColumnDirective implements AfterViewInit {

  @Input() options: GroupedColumnConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new GroupedColumn(hostElement, stark.options).render();
  }

}
