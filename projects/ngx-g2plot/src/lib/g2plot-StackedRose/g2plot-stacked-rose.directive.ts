import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { StackedRose, StackedRoseOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedRose]',
  exportAs: 'g2plotStackedRose'
})
export class G2plotStackedRoseDirective implements AfterViewInit {

  @Input() options: StackedRoseOptions;

  public instance: StackedRose;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new StackedRose(hostElement, this.options);
    this.instance.render();
  }

  update(options: StackedRoseOptions): void {
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
