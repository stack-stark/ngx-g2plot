import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { DensityHeatmap, DensityHeatmapOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotDensityHeatmap]',
  exportAs: 'g2plotDensityHeatmap'
})
export class G2plotDensityHeatmapDirective implements AfterViewInit {

  @Input() options: DensityHeatmapOptions;

  public instance: DensityHeatmap;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new DensityHeatmap(hostElement, this.options);
    this.instance.render();
  }

  update(options: DensityHeatmapOptions): void {
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


