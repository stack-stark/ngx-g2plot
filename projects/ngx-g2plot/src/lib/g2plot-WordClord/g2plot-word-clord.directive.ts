import { Directive, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { WordCloud, WordCloudConfig } from '@antv/g2plot';
@Directive({
  selector: '[starkG2plotWordCloud]',
  exportAs: 'g2plotWordCloud'
})
export class G2plotWordCloudDirective implements AfterViewInit {

  @Input() options: WordCloudConfig;

  public instance;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const stark = this;
    this.instance = new WordCloud(hostElement, stark.options);
    this.instance.render();
  }

  updateConfig(options: WordCloudConfig): void {
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

