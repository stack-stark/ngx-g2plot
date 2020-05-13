import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { StackedArea, StackedAreaConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedArea]',
  exportAs: 'g2plotStackedArea'
})
export class G2plotStackedAreaDirective implements AfterViewInit {

  @Input() options: StackedAreaConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new StackedArea(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: StackedAreaConfig): void {
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

