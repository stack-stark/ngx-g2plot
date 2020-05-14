import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Area, AreaConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotArea]',
  exportAs: 'g2plotArea'
})
export class G2plotAreaDirective implements AfterViewInit {

  @Input() options: AreaConfig;

  public instance: Area;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Area(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: AreaConfig): void {
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
