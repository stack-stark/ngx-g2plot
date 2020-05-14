import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { StepLine, StepLineConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStepLine]',
  exportAs: 'g2plotStepLine'
})
export class G2plotStepLineDirective implements AfterViewInit {

  @Input() options: StepLineConfig;

  public instance: StepLine;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new StepLine(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: StepLineConfig): void {
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

