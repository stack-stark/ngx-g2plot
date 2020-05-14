import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Line, LineConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotLine]',
  exportAs: 'g2plotLine'
})
export class G2plotLineDirective implements AfterViewInit {

  @Input() options: LineConfig;

  public instance: Line;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Line(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: LineConfig): void {
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
