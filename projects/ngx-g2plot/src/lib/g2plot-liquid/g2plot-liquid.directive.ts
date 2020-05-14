import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Liquid, LiquidConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotLiquid]',
  exportAs: 'g2plotLiquid'
})
export class G2plotLiquidDirective implements AfterViewInit {

  @Input() options: LiquidConfig;

  public instance: Liquid;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Liquid(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: LiquidConfig): void {
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


