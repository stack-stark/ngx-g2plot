import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Treemap, TreemapConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotTreemap]',
  exportAs: 'g2plotTreemap'
})
export class G2plotTreemapDirective implements AfterViewInit {

  @Input() options: TreemapConfig;

  public instance: Treemap;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Treemap(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: TreemapConfig): void {
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

