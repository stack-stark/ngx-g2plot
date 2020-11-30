import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Heatmap, HeatmapOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotHeatmap]',
  exportAs: 'g2plotHeatmap'
})
export class G2plotHeatmapDirective implements AfterViewInit {

  @Input() options: HeatmapOptions;

  public instance: Heatmap;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Heatmap(hostElement, this.options);
    this.instance.render();
  }

  update(options: HeatmapOptions): void {
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


