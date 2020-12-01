/*
 * @Description: WordCloud图表指令
 * @Date: 2020-12-01 10:50:06
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 10:54:18
 */
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { WordCloud, WordCloudOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotWordCloud]',
  exportAs: 'g2plotWordCloud'
})
export class G2plotWordCloudDirective implements AfterViewInit {

  @Input() options: WordCloudOptions;

  public instance: WordCloud;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new WordCloud(hostElement, this.options);
    this.instance.render();
  }

  /**
   * 通过这个方法，可以增量的更新图表配置
   * @param options
   */
  update(options: WordCloudOptions): void {
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

