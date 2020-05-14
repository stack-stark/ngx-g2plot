import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { RangeBar, RangeBarConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRangeBar]',
  exportAs: 'g2plotRangeBar'
})
export class G2plotRangeBarDirective implements AfterViewInit {

  @Input() options: RangeBarConfig;

  public instance: RangeBar;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new RangeBar(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: RangeBarConfig): void {
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




