import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Heatmap, HeatmapConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotHeatmap]',
  exportAs: 'g2plotHeatmap'
})
export class G2plotHeatmapDirective implements AfterViewInit {

  @Input() options: HeatmapConfig;

  public instance: Heatmap;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Heatmap(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: HeatmapConfig): void {
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


