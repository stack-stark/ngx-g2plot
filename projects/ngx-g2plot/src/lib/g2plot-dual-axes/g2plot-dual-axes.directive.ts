/*
 * @Description: DualAxes图表指令
 * @Date: 2020-12-01 17:26:14
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 17:29:52
 */
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { DualAxes, DualAxesOptions } from '@antv/g2plot';

@Directive({
  selector: '[starkG2plotDualAxes]',
  exportAs: 'g2plotDualAxes'
})
export class G2plotDualAxesDirective implements AfterViewInit {


  @Input() options: DualAxesOptions;

  public instance: DualAxes;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new DualAxes(hostElement, this.options);
    this.instance.render();
  }

   /**
    * 通过这个方法，可以增量的更新图表配置
    * @param options
    */
  update(options: DualAxesOptions): void {
    this.instance.update(options);
  }

  /**
   * 通过这个方法，可以修改图表的数据，并自动重新渲染
   * @param newData
   */
  changeData(newData: Array<object>): void {
    this.instance.changeData(newData);
  }

  /**
   * 完全销毁整个画布，回收所有资源，仅仅保留传入的 DOM container 容器
   */
  destroy(): void {
    this.instance.destroy();
  }

}
