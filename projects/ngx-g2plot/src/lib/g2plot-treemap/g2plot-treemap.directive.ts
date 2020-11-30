import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Treemap, TreemapOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotTreemap]',
  exportAs: 'g2plotTreemap'
})
export class G2plotTreemapDirective implements AfterViewInit {

  @Input() options: TreemapOptions;

  public instance: Treemap;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Treemap(hostElement, this.options);
    this.instance.render();
  }

  update(options: TreemapOptions): void {
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

