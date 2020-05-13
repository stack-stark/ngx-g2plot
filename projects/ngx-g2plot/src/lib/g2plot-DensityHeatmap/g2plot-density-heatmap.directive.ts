import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { DensityHeatmap, DensityHeatmapConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotDensityHeatmap]',
  exportAs: 'g2plotDensityHeatmap'
})
export class G2plotDensityHeatmapDirective implements AfterViewInit {

  @Input() options: DensityHeatmapConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new DensityHeatmap(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: DensityHeatmapConfig): void {
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


