import { Directive, ElementRef, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { Bar, DataItem } from '@antv/g2plot';

@Directive({
  selector: '[starkG2plotBar]'
})
export class G2plotBarDirective implements AfterViewInit {

  @Output() g2Bar = new EventEmitter();
  @Input() options: object;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new Bar(hostElement, stark.options).render();
  }
}
