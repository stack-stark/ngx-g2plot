import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Treemap, TreemapConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotTreemap]',
  exportAs: 'g2plotTreemap'
})
export class G2plotTreemapDirective implements AfterViewInit {

  @Input() options: TreemapConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new Treemap(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: TreemapConfig): void {
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

