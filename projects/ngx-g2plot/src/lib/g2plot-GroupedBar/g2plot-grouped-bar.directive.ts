import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { GroupedBar, GroupedBarConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGroupedBar]',
  exportAs: 'g2plotGroupedBar'
})
export class G2plotGroupedBarDirective implements AfterViewInit {

  @Input() options: GroupedBarConfig;

  public instance: GroupedBar;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new GroupedBar(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: GroupedBarConfig): void {
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


