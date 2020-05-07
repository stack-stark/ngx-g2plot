
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { WordCloud, WordCloudConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotWordCloud]'
})
export class G2plotWordCloudDirective implements AfterViewInit {

  @Input() options: WordCloudConfig;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    new WordCloud(hostElement, stark.options).render();
  }

}
