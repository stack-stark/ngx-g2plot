
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Heatmap, HeatmapConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotHeatmap]'
})
export class G2plotHeatmapDirective implements AfterViewInit {

  @Input() options: HeatmapConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Heatmap(hostElement, stark.options).render();
  }

}
