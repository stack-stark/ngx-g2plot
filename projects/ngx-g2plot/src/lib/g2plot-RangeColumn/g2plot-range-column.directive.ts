import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { RangeColumn, RangeColumnConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotRangeColumn]',
  exportAs: 'g2plotRangeColumn'
})
export class G2plotRangeColumnDirective implements AfterViewInit {

  @Input() options: RangeColumnConfig;

  public instance: RangeColumn;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new RangeColumn(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: RangeColumnConfig): void {
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
