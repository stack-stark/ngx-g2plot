import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Donut, DonutConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotDonut]',
  exportAs: 'g2plotDonut'
})
export class G2plotDonutDirective implements AfterViewInit {

  @Input() options: DonutConfig;

  public instance: Donut;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Donut(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: DonutConfig): void {
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


