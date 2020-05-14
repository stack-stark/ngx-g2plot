
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Scatter, ScatterConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotScatter]',
  exportAs: 'g2plotScatter'
})
export class G2plotScatterDirective implements AfterViewInit {

  @Input() options: ScatterConfig;

  public instance: Scatter;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Scatter(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: ScatterConfig): void {
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

