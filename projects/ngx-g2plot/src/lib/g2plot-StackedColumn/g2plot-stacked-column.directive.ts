import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { StackedColumn, StackedColumnConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedColumn]',
  exportAs: 'g2plotStackedColumn'
})
export class G2plotStackedColumnDirective implements AfterViewInit {

  @Input() options: StackedColumnConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new StackedColumn(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: StackedColumnConfig): void {
    this.instance.updateConfig(options);
    this.instance.render();
  }

  changeData(newData): void {
    this.instance.changeData(newData);
  }

  repaint(): void {
    this.instance.repaint();
  }

  destroy(): void {
    this.instance.destroy();
  }

}

