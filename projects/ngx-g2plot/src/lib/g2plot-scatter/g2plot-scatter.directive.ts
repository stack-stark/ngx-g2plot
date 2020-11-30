
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Scatter, ScatterOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotScatter]',
  exportAs: 'g2plotScatter'
})
export class G2plotScatterDirective implements AfterViewInit {

  @Input() options: ScatterOptions;

  public instance: Scatter;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Scatter(hostElement, this.options);
    this.instance.render();
  }

  update(options: ScatterOptions): void {
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

