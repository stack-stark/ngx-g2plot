import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Column, ColumnConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotColumn]',
  exportAs: 'g2plotColumn'
})
export class G2plotColumnDirective implements AfterViewInit {

  @Input() options: ColumnConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new Column(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: ColumnConfig): void {
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


