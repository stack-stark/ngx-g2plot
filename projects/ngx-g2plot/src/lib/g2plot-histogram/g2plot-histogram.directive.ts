import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Histogram, HistogramConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotHistogram]',
  exportAs: 'g2plotHistogram'
})
export class G2plotHistogramDirective implements AfterViewInit {

  @Input() options: HistogramConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new Histogram(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: HistogramConfig): void {
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

