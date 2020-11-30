import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Donut, DonutOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotDonut]',
  exportAs: 'g2plotDonut'
})
export class G2plotDonutDirective implements AfterViewInit {

  @Input() options: DonutOptions;

  public instance: Donut;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Donut(hostElement, this.options);
    this.instance.render();
  }

  update(options: DonutOptions): void {
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


