import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Treemap, TreemapOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotTreemap]',
  exportAs: 'g2plotTreemap'
})
export class G2plotTreemapDirective implements AfterViewInit {

  @Input() options: TreemapOptions;

  public instance: Treemap;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Treemap(hostElement, this.options);
    this.instance.render();
  }

   /**
    * 通过这个方法，可以增量的更新图表配置
    * @param options
    */
  update(options: TreemapOptions): void {
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
