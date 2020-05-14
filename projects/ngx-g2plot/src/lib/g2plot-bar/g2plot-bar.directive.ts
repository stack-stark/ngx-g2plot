import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Bar, BarConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotBar]',
  exportAs: 'g2plotBar'
})
export class G2plotBarDirective implements AfterViewInit {

  @Input() options: BarConfig;

  public instance: Bar;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Bar(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: BarConfig): void {
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
