
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Bubble, BubbleConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotBubble]',
  exportAs: 'g2plotBubble'
})
export class G2plotBubbleDirective implements AfterViewInit {

  @Input() options: BubbleConfig;

  public instance: Bubble;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Bubble(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: BubbleConfig): void {
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

