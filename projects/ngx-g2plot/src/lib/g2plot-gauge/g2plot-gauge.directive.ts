import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Gauge, GaugeOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGauge]',
  exportAs: 'g2plotGauge'
})
export class G2plotGaugeDirective implements AfterViewInit {

  @Input() options: GaugeOptions;

  public instance: Gauge;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Gauge(hostElement, this.options);
    this.instance.render();
  }

  update(options: GaugeOptions): void {
    this.instance.update(options);
    this.instance.render();
  }

  changeData(newData: Array<object>): void {
    this.instance.changeData(newData);
  }

  

  destroy(): void {
    this.instance.destroy();
  }

}


