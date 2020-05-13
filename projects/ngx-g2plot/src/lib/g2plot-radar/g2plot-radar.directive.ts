import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Radar, RadarConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRadar]',
  exportAs: 'g2plotRadar'
})
export class G2plotRadarDirective implements AfterViewInit {

  @Input() options: RadarConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new Radar(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: RadarConfig): void {
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



