/*
 * @Description: TinyColumn图表指令
 * @Date: 2020-12-01 17:41:29
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 17:48:03
 */
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { TinyColumn, TinyColumnOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotTinyColumn]',
  exportAs: 'g2plotTinyColumn'
})
export class G2plotTinyColumnDirective implements AfterViewInit {

  @Input() options: TinyColumnOptions;

  public instance: TinyColumn;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new TinyColumn(hostElement, this.options);
    this.instance.render();
  }

   /**
    * 通过这个方法，可以增量的更新图表配置
    * @param options
    */
  update(options: TinyColumnOptions): void {
    this.instance.update(options);
  }

  /**
   * 通过这个方法，可以修改图表的数据，并自动重新渲染
   * @param newData
   */
  changeData(newData: number[]): void {
    this.instance.changeData(newData);
  }

  /**
   * 完全销毁整个画布，回收所有资源，仅仅保留传入的 DOM container 容器
   */
  destroy(): void {
    this.instance.destroy();
  }

}
