import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { RangeColumn, RangeColumnOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRangeColumn]',
  exportAs: 'g2plotRangeColumn'
})
export class G2plotRangeColumnDirective implements AfterViewInit {

  @Input() options: RangeColumnOptions;

  public instance: RangeColumn;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new RangeColumn(hostElement, this.options);
    this.instance.render();
  }

  update(options: RangeColumnOptions): void {
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
