import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { StackedRose, StackedRoseConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedRose]',
  exportAs: 'g2plotStackedRose'
})
export class G2plotStackedRoseDirective implements AfterViewInit {

  @Input() options: StackedRoseConfig;

  public instance: StackedRose;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new StackedRose(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: StackedRoseConfig): void {
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
