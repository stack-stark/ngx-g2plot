import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { GroupedRose, GroupedRoseOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotGroupedRose]',
  exportAs: 'g2plotGroupedRose'
})
export class G2plotGroupedRoseDirective implements AfterViewInit {

  @Input() options: GroupedRoseOptions;

  public instance: GroupedRose;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new GroupedRose(hostElement, this.options);
    this.instance.render();
  }

  update(options: GroupedRoseOptions): void {
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


