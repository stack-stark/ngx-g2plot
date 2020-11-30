
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { StackedBar, StackedBarOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedBar]',
  exportAs: 'g2plotStackedBar'
})
export class G2plotStackedBarDirective implements AfterViewInit {

  @Input() options: StackedBarOptions;

  public instance: StackedBar;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new StackedBar(hostElement, this.options);
    this.instance.render();
  }

  update(options: StackedBarOptions): void {
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

