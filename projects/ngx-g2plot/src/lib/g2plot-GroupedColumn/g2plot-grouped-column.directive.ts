import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { GroupedColumn, GroupedColumnOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGroupedColumn]',
  exportAs: 'g2plotGroupedColumn'
})
export class G2plotGroupedColumnDirective implements AfterViewInit {

  @Input() options: GroupedColumnOptions;

  public instance: GroupedColumn;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new GroupedColumn(hostElement, this.options);
    this.instance.render();
  }

  update(options: GroupedColumnOptions): void {
    this.instance.update(options);
    this.instance.render();
  }

  changeData(newData: Array<object>): void {
    this.instance.changeData(newData);
  }

  

  destroy(): void {
    this.instance.destroy();
  }

}


