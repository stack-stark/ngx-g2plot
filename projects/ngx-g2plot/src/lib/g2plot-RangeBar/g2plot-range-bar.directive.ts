import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { RangeBar, RangeBarOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRangeBar]',
  exportAs: 'g2plotRangeBar'
})
export class G2plotRangeBarDirective implements AfterViewInit {

  @Input() options: RangeBarOptions;

  public instance: RangeBar;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new RangeBar(hostElement, this.options);
    this.instance.render();
  }

  update(options: RangeBarOptions): void {
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




