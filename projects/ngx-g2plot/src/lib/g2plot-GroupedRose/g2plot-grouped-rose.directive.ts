import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { GroupedRose, GroupedRoseConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGroupedRose]',
  exportAs: 'g2plotGroupedRose'
})
export class G2plotGroupedRoseDirective implements AfterViewInit {

  @Input() options: GroupedRoseConfig;

  public instance: GroupedRose;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new GroupedRose(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: GroupedRoseConfig): void {
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


