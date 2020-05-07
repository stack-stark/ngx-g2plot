
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Bullet, BulletConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotBullet]'
})
export class G2plotBulletDirective implements AfterViewInit {

  @Input() options: BulletConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Bullet(hostElement, stark.options).render();
  }

}
