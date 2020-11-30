/*
 * @Description: 
 * @Date: 2020-11-27 10:07:48
 * @LastEditors: tanmh
 * @LastEditTime: 2020-11-30 17:24:11
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

  update(options: BulletOptions): void {
    this.instance.update(options);
    this.instance.render();
  }

  changeData(newData: Array<object>): void {
    this.instance.changeData(newData);
  }

  destroy(): void {
    this.instance.destroy();
  }

}


