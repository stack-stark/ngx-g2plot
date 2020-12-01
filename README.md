<!--
 * @Description: 
 * @Date: 2020-05-07 11:57:49
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 11:15:52
-->
# NgxG2plot

angular的g2plot封装,方便使用

# Npm

https://www.npmjs.com/package/ngx-g2plot

# Preview

https://stack-stark.github.io/ngx-g2plot-preview-compiled/

# License

MIT

# 2.0.0修改如下

1.升级angular版本至11,

2.升级g2plot至V2

3.按需加载

4.删除g2plot不再支持的方法和图表导出
## 安装--Install

``` bash
npm install --save @antv/g2plot ngx-g2plot
#or
yarn add @antv/g2plot ngx-g2plot
```

## 使用--Usage

#### line.component.html
``` html
<div starkG2plotBar  #divG2plotLine="g2plotLine" [options]="options"></div>
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
  //获取到指令对象 Gets to the instruction object
  @ViewChild('divG2plotLine') divG2plotLine: G2plotLineDirective;

  data = [
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
    //使用当前实例方法 Use the current instance method
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
## 提示 -- Tip
我通过指定exportAs导出`update()、changeData()、destroy()`这四种方法，以便您可以在任何时候更改图表。使用方法见上面

如果你需要获取当前图表实例及其所有属性和方法,可使用`this.xxx.instance`,详细见上面的`changeSize()`

I'm using exportAs  the deduced `update(), changeData(), destroy()` the four methods, so that you can at any time to change chart.

If you need to get the current diagram instance and all its properties and methods, use `this.xxx.instance`. See `changeSize()` above for details.

## 所有指令列表 -- All Directive

指令名/Directive | 图表名 | exportAs
-|-|-
starkG2plotLine | Line - 折线图 | g2plotLine
starkG2plotArea | Area - 面积图 | g2plotArea
starkG2plotStepLine | StepLine - 阶梯折图  | g2plotStepLine
starkG2plotStackedArea | StackedArea - 堆叠面积图  | g2plotStackedArea
starkG2plotColumn | Column - 柱状图  | g2plotColumn
starkG2plotStackedColumn | StackedColumn - 堆叠柱状图  | g2plotStackedColumn
starkG2plotGroupedColumn | GroupedColumn - 分组柱状图  | g2plotGroupedColumn
starkG2plotRangeColumn | RangeColumn - 区间柱状图  | g2plotRangeColumn
starkG2plotHistogram | Histogram - 直方图  | g2plotHistogram
starkG2plotWaterfall | Waterfall - 瀑布图  | g2plotWaterfall
starkG2plotBar | Bar - 基础条形图  | g2plotBar
starkG2plotStackedBar | StackedBar - 堆叠条形图  | g2plotStackedBar
starkG2plotGroupedBar | GroupedBar - 分组条形图  | g2plotGroupedBar
starkG2plotRangeBar | RangeBar - 区间条形图  | g2plotRangeBar
starkG2plotPie | Pie - 饼图  | g2plotPie
starkG2plotDonut | Donut - 环图  | g2plotDonut
starkG2plotRose | Rose - 玫瑰图  | g2plotRose
starkG2plotStackedRose | StackedRose - 堆叠玫瑰图 | g2plotStackedRose
starkG2plotGroupedRose | GroupedRose - 分组玫瑰图 | g2plotGroupedRose
starkG2plotRadar | Radar - 雷达图 | g2plotRadar
starkG2plotScatter | Scatter - 散点图 | g2plotScatter
starkG2plotBubble | Bubble - 气泡图 | g2plotBubble
starkG2plotHeatmap | Heatmap - 热力图 | g2plotHeatmap
starkG2plotDensityHeatmap | DensityHeatmap - 密度热力图 | g2plotDensityHeatmap
starkG2plotTreemap | Treemap - 矩形树图 | g2plotTreemap
starkG2plotCalendar | Calendar - 日历图 | g2plotCalendar
starkG2plotBullet | Bullet - 子弹图 | g2plotBullet
starkG2plotGauge | Gauge - 仪表盘 | g2plotGauge
starkG2plotLiquid | Liquid - 水波图 | g2plotLiquid
starkG2plotWordClord | WordClord - 词云 | g2plotWordClord

## g2plot官方文档地址 -- G2plot official document address
https://g2plot.antv.vision/zh/docs/manual/introduction

## 在线预览 -- Preview
https://stack-stark.github.io/ngx-g2plot-preview-compiled/

## 使用遇到了问题或者缺陷? -- Use has encountered a problem or defect?
https://github.com/stack-stark/ngx-g2plot/issues

## License
MIT
