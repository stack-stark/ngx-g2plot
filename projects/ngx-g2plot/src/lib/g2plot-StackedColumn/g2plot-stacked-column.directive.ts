import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { StackedColumn, StackedColumnOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedColumn]',
  exportAs: 'g2plotStackedColumn'
})
export class G2plotStackedColumnDirective implements AfterViewInit {

  @Input() options: StackedColumnOptions;

  public instance: StackedColumn;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new StackedColumn(hostElement, this.options);
    this.instance.render();
  }

  update(options: StackedColumnOptions): void {
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

