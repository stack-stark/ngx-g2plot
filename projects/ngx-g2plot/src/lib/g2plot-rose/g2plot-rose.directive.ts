import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Rose, RoseConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRose]',
  exportAs: 'g2plotRose'
})
export class G2plotRoseDirective implements AfterViewInit {

  @Input() options: RoseConfig;

  public instance: Rose;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Rose(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: RoseConfig): void {
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
