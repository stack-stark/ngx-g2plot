import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Gauge, GaugeConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGauge]',
  exportAs: 'g2plotGauge'
})
export class G2plotGaugeDirective implements AfterViewInit {

  @Input() options: GaugeConfig;

  public instance: Gauge;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Gauge(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: GaugeConfig): void {
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


