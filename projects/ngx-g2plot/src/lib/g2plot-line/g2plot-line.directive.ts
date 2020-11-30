import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Line, LineOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotLine]',
  exportAs: 'g2plotLine'
})
export class G2plotLineDirective implements AfterViewInit {

  @Input() options: LineOptions;

  public instance: Line;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Line(hostElement, this.options);
    this.instance.render();
  }

  update(options: LineOptions): void {
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
