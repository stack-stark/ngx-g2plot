import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Histogram, HistogramOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotHistogram]',
  exportAs: 'g2plotHistogram'
})
export class G2plotHistogramDirective implements AfterViewInit {

  @Input() options: HistogramOptions;

  public instance: Histogram;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Histogram(hostElement, this.options);
    this.instance.render();
  }

  update(options: HistogramOptions): void {
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


