import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Column, ColumnOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotColumn]',
  exportAs: 'g2plotColumn'
})
export class G2plotColumnDirective implements AfterViewInit {

  @Input() options: ColumnOptions;

  public instance: Column;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Column(hostElement, this.options);
    this.instance.render();
  }

  update(options: ColumnOptions): void {
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


