/*
 * @Description: Bullet图表指令
 * @Date: 2020-11-27 10:07:48
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 10:36:01
 */
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Bullet, BulletOptions } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotBullet]',
  exportAs: 'g2plotBullet'
})
export class G2plotBulletDirective implements AfterViewInit {

  @Input() options: BulletOptions;

  public instance: Bullet;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new Bullet(hostElement, this.options);
    this.instance.render();
  }

  /**
   * 通过这个方法，可以增量的更新图表配置
   * @param options
   */
  update(options: BulletOptions): void {
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


