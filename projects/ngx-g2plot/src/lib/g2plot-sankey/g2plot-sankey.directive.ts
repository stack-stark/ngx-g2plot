/*
 * @Description: Sankey
 * @Date: 2020-12-01 17:26:14
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 17:37:59
 */
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { Sankey, SankeyOptions } from '@antv/g2plot';

@Directive({
  selector: '[starkG2plotSankey]',
  exportAs: 'g2plotSankey'
})
export class G2plotSankeyDirective implements AfterViewInit {


  @Input() options: SankeyOptions;

  public instance: Sankey;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Sankey(hostElement, this.options);
    this.instance.render();
  }

   /**
    * 通过这个方法，可以增量的更新图表配置
    * @param options
    */
  update(options: SankeyOptions): void {
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
