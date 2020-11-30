import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Liquid, LiquidOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotLiquid]',
  exportAs: 'g2plotLiquid'
})
export class G2plotLiquidDirective implements AfterViewInit {

  @Input() options: LiquidOptions;

  public instance: Liquid;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Liquid(hostElement, this.options);
    this.instance.render();
  }

  update(options: LiquidOptions): void {
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


