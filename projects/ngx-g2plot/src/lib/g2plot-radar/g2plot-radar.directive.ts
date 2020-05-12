import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Radar, RadarConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRadar]'
})
export class G2plotRadarDirective implements AfterViewInit {

  @Input() options: RadarConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Radar(hostElement, stark.options).render();
  }

}

