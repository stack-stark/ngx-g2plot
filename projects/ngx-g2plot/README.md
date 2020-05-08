# about
angular的g2plot封装,方便使用

# Install

``` bash
npm install --save @antv/g2plot ngx-g2plot
#or
yarn add @antv/g2plot ngx-g2plot
```

# Usage

#### g2plot-demo.component.html
``` html
<div starkG2plotBar [options]="options"></div>
```

#### g2plot-demo.component.ts
``` js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-g2plot-demo',
  templateUrl: './g2plot-demo.component.html',
  styleUrls: ['./g2plot-demo.component.less']
})
export class G2plotDemoComponent implements OnInit {

 data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
  ];

  options =  {
    data: this.data,
    xField: 'sales',
    yField: 'year',
    colorField: 'year',
  };
  constructor() {

  }

  ngOnInit(): void {
  }
}

```
#### g2plot-demo.module.ts
``` ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxG2plotModule } from 'ngx-g2plot';

@NgModule({
  declarations: [G2plotDemoComponent],
  imports: [
    CommonModule,
    NgxG2plotModule
  ]
})
export class G2plotDemoModule { }
```

# 所有指令列表

指令名 | 图表名
-|-
starkG2plotLine | Line - 折线图
starkG2plotArea | Area - 面积图
starkG2plotStepLine | StepLine - 阶梯折图
starkG2plotStackedArea | StackedArea - 堆叠面积图
starkG2plotColumn | Column - 柱状图
starkG2plotStackedColumn | StackedColumn - 堆叠柱状图
starkG2plotGroupedColumn | GroupedColumn - 分组柱状图
starkG2plotRangeColumn | RangeColumn - 区间柱状图
starkG2plotHistogram | Histogram - 直方图
starkG2plotWaterfall | Waterfall - 瀑布图
starkG2plotBar | Bar - 基础条形图
starkG2plotStackedBar | StackedBar - 堆叠条形图
starkG2plotGroupedBar | GroupedBar - 分组条形图
starkG2plotRangeBar | RangeBar - 区间条形图
starkG2plotPie | Pie - 饼图
starkG2plotDonut | Donut - 环图
starkG2plotRose | Rose - 玫瑰图
starkG2plotStackedRose | StackedRose - 堆叠玫瑰图
starkG2plotGroupedRose | GroupedRose - 分组玫瑰图
starkG2plotRadar | Radar - 雷达图
starkG2plotScatter | Scatter - 散点图
starkG2plotBubble | Bubble - 气泡图
starkG2plotHeatmap | Heatmap - 热力图
starkG2plotDensityHeatmap | DensityHeatmap - 密度热力图
starkG2plotTreemap | Treemap - 矩形树图
starkG2plotCalendar | Calendar - 日历图
starkG2plotBullet | Bullet - 子弹图
starkG2plotGauge | Gauge - 仪表盘
starkG2plotLiquid | Liquid - 水波图
starkG2plotWordClord | WordClord - 词云

# g2plot官方文档地址
https://g2plot.antv.vision/zh/docs/manual/plots/line


# Preview
http://ngx-g2plot.asnyc.cn

# License
MIT
