import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { GroupedBar, GroupedBarOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGroupedBar]',
  exportAs: 'g2plotGroupedBar'
})
export class G2plotGroupedBarDirective implements AfterViewInit {

  @Input() options: GroupedBarOptions;

  public instance: GroupedBar;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new GroupedBar(hostElement, this.options);
    this.instance.render();
  }

  update(options: GroupedBarOptions): void {
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


