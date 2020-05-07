
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Treemap, TreemapConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotTreemap]'
})
export class G2plotTreemapDirective implements AfterViewInit {

  @Input() options: TreemapConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Treemap(hostElement, stark.options).render();
  }

}
