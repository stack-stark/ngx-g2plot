import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Rose, RoseConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRose]',
  exportAs: 'g2plotRose'
})
export class G2plotRoseDirective implements AfterViewInit {

  @Input() options: RoseConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new Rose(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: RoseConfig): void {
    this.instance.updateConfig(options);
    this.instance.render();
  }

  changeData(newData): void {
    this.instance.changeData(newData);
  }

  repaint(): void {
    this.instance.repaint();
  }

  destroy(): void {
    this.instance.destroy();
  }

}
