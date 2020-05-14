import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { StackedColumn, StackedColumnConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedColumn]',
  exportAs: 'g2plotStackedColumn'
})
export class G2plotStackedColumnDirective implements AfterViewInit {

  @Input() options: StackedColumnConfig;

  public instance: StackedColumn;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new StackedColumn(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: StackedColumnConfig): void {
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

