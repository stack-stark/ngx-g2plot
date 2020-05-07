
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { StepLine, StepLineConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotStepLine]'
})
export class G2plotStepLineDirective implements AfterViewInit {

  @Input() options: StepLineConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new StepLine(hostElement, stark.options).render();
  }

}
