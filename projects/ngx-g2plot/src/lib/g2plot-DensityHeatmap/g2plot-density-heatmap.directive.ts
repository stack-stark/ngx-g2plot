
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { DensityHeatmap, DensityHeatmapConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotDensityHeatmap]'
})
export class G2plotDensityHeatmapDirective implements AfterViewInit {

  @Input() options: DensityHeatmapConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new DensityHeatmap(hostElement, stark.options).render();
  }

}
