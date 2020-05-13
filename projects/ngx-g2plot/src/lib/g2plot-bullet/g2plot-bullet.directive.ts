import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { Bullet, BulletConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotBullet]',
  exportAs: 'g2plotBullet'
})
export class G2plotBulletDirective implements AfterViewInit {

  @Input() options: BulletConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new Bullet(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: BulletConfig): void {
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


