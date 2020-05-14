import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { WordCloud, WordCloudConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotWordCloud]',
  exportAs: 'g2plotWordCloud'
})
export class G2plotWordCloudDirective implements AfterViewInit {

  @Input() options: WordCloudConfig;

  public instance: WordCloud;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    this.instance = new WordCloud(hostElement, this.options);
    this.instance.render();
  }

  updateConfig(options: WordCloudConfig): void {
    this.instance.updateConfig(options);
    this.instance.render();
  }

  changeData(newData: Array<object>): void {
    this.instance.changeData(newData);
  }

  repaint(): void {
    this.instance.repaint();
  }

  destroy(): void {
    this.instance.destroy();
  }

}

