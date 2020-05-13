import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Pie, PieConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotPie]',
  exportAs: 'g2plotPie'
})
export class G2plotPieDirective implements AfterViewInit {

  @Input() options: PieConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new Pie(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: PieConfig): void {
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


