
import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { StackedBar, StackedBarConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStackedBar]',
  exportAs: 'g2plotStackedBar'
})
export class G2plotStackedBarDirective implements AfterViewInit {

  @Input() options: StackedBarConfig;

  public instance: StackedBar;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new StackedBar(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: StackedBarConfig): void {
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

