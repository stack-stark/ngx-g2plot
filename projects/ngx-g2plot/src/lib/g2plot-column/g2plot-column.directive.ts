import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Column, ColumnConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotColumn]',
  exportAs: 'g2plotColumn'
})
export class G2plotColumnDirective implements AfterViewInit {

  @Input() options: ColumnConfig;

  public instance: Column;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Column(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: ColumnConfig): void {
    this.instance.updateConfig(options);
    this.instance.render();
  }

  changeData(newData: Array<object>): void {
    this.instance.changeData(newData);
  }

  repaint(): void {
    this.instance.repaint();
  }

  destroy(): void {
    this.instance.destroy();
  }

}


