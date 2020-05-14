import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { GroupedColumn, GroupedColumnConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGroupedColumn]',
  exportAs: 'g2plotGroupedColumn'
})
export class G2plotGroupedColumnDirective implements AfterViewInit {

  @Input() options: GroupedColumnConfig;

  public instance: GroupedColumn;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new GroupedColumn(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: GroupedColumnConfig): void {
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


