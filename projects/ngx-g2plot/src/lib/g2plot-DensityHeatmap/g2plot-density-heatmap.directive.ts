import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { DensityHeatmap, DensityHeatmapConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotDensityHeatmap]',
  exportAs: 'g2plotDensityHeatmap'
})
export class G2plotDensityHeatmapDirective implements AfterViewInit {

  @Input() options: DensityHeatmapConfig;

  public instance: DensityHeatmap;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new DensityHeatmap(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: DensityHeatmapConfig): void {
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


