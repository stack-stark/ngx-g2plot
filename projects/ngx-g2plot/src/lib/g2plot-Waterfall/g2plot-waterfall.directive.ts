import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Waterfall, WaterfallConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotWaterfall]',
  exportAs: 'g2plotWaterfall'
})
export class G2plotWaterfallDirective implements AfterViewInit {

  @Input() options: WaterfallConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new Waterfall(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: WaterfallConfig): void {
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

