import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { StepLine, StepLineOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStepLine]',
  exportAs: 'g2plotStepLine'
})
export class G2plotStepLineDirective implements AfterViewInit {

  @Input() options: StepLineOptions;

  public instance: StepLine;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new StepLine(hostElement, this.options);
    this.instance.render();
  }

  update(options: StepLineOptions): void {
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

