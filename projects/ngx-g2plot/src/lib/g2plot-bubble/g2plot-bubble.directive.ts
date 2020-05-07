
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Bubble, BubbleConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotBubble]'
})
export class G2plotBubbleDirective implements AfterViewInit {

  @Input() options: BubbleConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Bubble(hostElement, stark.options).render();
  }

}
