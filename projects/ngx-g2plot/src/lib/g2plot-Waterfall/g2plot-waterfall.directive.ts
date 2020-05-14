import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Waterfall, WaterfallConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotWaterfall]',
  exportAs: 'g2plotWaterfall'
})
export class G2plotWaterfallDirective implements AfterViewInit {

  @Input() options: WaterfallConfig;

  public instance: Waterfall;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Waterfall(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: WaterfallConfig): void {
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

