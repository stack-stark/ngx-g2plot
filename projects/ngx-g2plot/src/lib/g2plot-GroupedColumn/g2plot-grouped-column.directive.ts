import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { GroupedColumn, GroupedColumnConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGroupedColumn]',
  exportAs: 'g2plotGroupedColumn'
})
export class G2plotGroupedColumnDirective implements AfterViewInit {

  @Input() options: GroupedColumnConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new GroupedColumn(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: GroupedColumnConfig): void {
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


