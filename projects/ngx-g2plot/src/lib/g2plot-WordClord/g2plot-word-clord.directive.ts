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

  update(options: WordCloudOptions): void {
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

