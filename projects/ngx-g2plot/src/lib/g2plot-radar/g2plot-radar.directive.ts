import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Radar, RadarOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRadar]',
  exportAs: 'g2plotRadar'
})
export class G2plotRadarDirective implements AfterViewInit {

  @Input() options: RadarOptions;

  public instance: Radar;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Radar(hostElement, this.options);
    this.instance.render();
  }

  update(options: RadarOptions): void {
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



