<!--
 * @Description: 
 * @Date: 2020-05-07 11:57:49
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-02 11:03:55
-->
## NgxG2plot

angular的g2plot封装,方便使用。插件仅依赖g2plot,当g2plot有小更新时,更新g2plot即可,大更新时我会跟进进行升级。

## 安装

``` bash
npm install --save @antv/g2plot ngx-g2plot
#or
yarn add @antv/g2plot ngx-g2plot
```

## 使用

#### line.component.html

``` html
<div starkG2plotLine  #divG2plotLine="g2plotLine" [options]="options"></div>
```

#### line.component.ts
``` js
import { Component, ViewChild } from '@angular/core';
import { G2plotLineDirective } from 'ngx-g2plot';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.less']
})
export class LineComponent {

  constructor() { }
  //获取到指令对象 
  @ViewChild('divG2plotLine') divG2plotLine!: G2plotLineDirective;

  data: Array<object> = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  options = {
    title: {
      visible: true,
      text: '折线图',
    },
    description: {
      visible: true,
      text: '用平滑的曲线代替折线。',
    },
    data: this.data,
    xField: 'year',
    yField: 'value',
  };

  update(): void {
   const options = {
      title: {
        visible: true,
        text: 'The line chart',
      },
      description: {
        visible: true,
        text: 'Replace broken lines with smooth curves.',
      },
      xField: 'year',
      yField: 'value',
    };
    this.divG2plotLine.update(options);
  }

  changeData(): void {
    const data = [
      { year: '1991', value: 13 },
      { year: '1992', value: 14 },
      { year: '1993', value: 13.5 },
      { year: '1994', value: 15 },
      { year: '1995', value: 14.9 },
      { year: '1996', value: 16 },
      { year: '1997', value: 17 },
      { year: '1998', value: 19 },
      { year: '1999', value: 23 },
    ];
    this.divG2plotLine.changeData(data);
  }


  destroy(): void {
    this.divG2plotLine.destroy();
  }

  changeSize(): void {
    //使用当前实例方法 
    this.divG2plotLine.instance.changeSize(300, 300);
  }
}

```
#### line.module.ts
``` ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotLineModule } from 'ngx-g2plot';

@NgModule({
  declarations: [G2plotDemoComponent],
  imports: [
    CommonModule,
    G2plotLineModule
  ]
})
export class G2plotDemoModule { }
```
## 提示 
我通过指定exportAs导出`update()、changeData()、destroy()`这三种方法，以便您可以在任何时候更改图表。使用方法见上面

如果你需要获取当前图表实例及其所有属性和方法,可使用`this.xxx.instance`,参考见上面的`changeSize()`

图表所有方法见官方文档: https://g2plot.antv.vision/zh/docs/manual/plot-api

## 所有指令列表

指令名/Directive | 图表名 | exportAs | Module
-|-|-|-
starkG2plotArea | Area - 面积图 | g2plotArea | G2plotAreaModule
starkG2plotBar | Bar - 基础条形图  | g2plotBar | G2plotBarModule
starkG2plotBidirectionalBar | BidirectionalBar - 对称条形图 | g2plotBidirectionalBar | G2plotBidirectionalBarModule
starkG2plotBox | Box - 箱图  | g2plotBox | G2plotBoxModule
starkG2plotBullet | Bullet - 子弹图 | g2plotBullet | G2plotBulletModule
starkG2plotColumn | Column - 柱状图  | g2plotColumn | G2plotColumnModule
starkG2plotDualAxes | DualAxes - 柱线混合图  | g2plotDualAxes | G2plotDualAxesModule
starkG2plotFunnel | Funnel - 漏斗图  | g2plotFunnel | G2plotFunnelModule
starkG2plotGauge | Gauge - 仪表盘 | g2plotGauge | G2plotGaugeModule
starkG2plotHeatmap | Heatmap - 热力图 | g2plotHeatmap | G2plotHeatmapModule
starkG2plotHistogram | Histogram - 直方图  | g2plotHistogram | G2plotHistogramModule
starkG2plotLine | Line - 折线图 | g2plotLine | G2plotLineModule
starkG2plotLiquid | Liquid - 水波图 | g2plotLiquid | G2plotLiquidModule
starkG2plotPie | Pie - 饼图  | g2plotPie | G2plotPieModule
starkG2plotRadialBar | RadialBar - 玉珏图 | g2plotRadialBar | G2plotRadialBarModule
starkG2plotRadar | Radar - 雷达图 | g2plotRadar | G2plotRadarModule
starkG2plotRose | Rose - 玫瑰图  | g2plotRose | G2plotRoseModule
starkG2plotScatter | Scatter - 散点图 | g2plotScatter | G2plotScatterModule
starkG2plotStock | Stock - 股票图 | g2plotStock | G2plotStockModule
starkG2plotSunburst | Sunburst - 旭日图图 | g2plotSunburst | G2plotSunburstModule
starkG2plotTinyColumn | TinyColumn - 迷你图 | g2plotTinyColumn | G2plotTinyColumnModule
starkG2plotWaterfall | Waterfall - 瀑布图  | g2plotWaterfall | G2plotWaterfallModule
starkG2plotWordCloud | WordCloud - 词云 | g2plotWordCloud | G2plotWordCloudModule

### 关于命名

指令名为 `starkG2plot` + `官方图表名称`, exportAs导出为`g2plot` + `官方图表名称`, Module为 `G2plot` + `官方图表名称` + `Module`

## g2plot官方文档地址
https://g2plot.antv.vision/zh/docs/manual/introduction

## 使用遇到了问题或者缺陷? 
https://github.com/stack-stark/ngx-g2plot/issues

## License
MIT