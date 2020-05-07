# about
angular的g2plot封装,方便使用

# Install

``` bash
npm install --save ngx-g2plot
#or
yarn add ngx-g2plot
```

# Usage
### 安装
``` bash
npm install --save ngx-g2plot
```

### 使用
#### g2plot-demo.component.html
``` html
<div starkG2plotBar [options]="options"></div>
```

#### g2plot-demo.component.ts
``` js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-g2plot',
  templateUrl: './g2plot.component.html',
  styleUrls: ['./g2plot.component.less']
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
starkG2plotBar | StackedArea - 堆叠面积图
starkG2plotBar | Column - 柱状图
starkG2plotBar | StackedColumn - 堆叠柱状图
starkG2plotBar | GroupedColumn - 分组柱状图

# g2plot官方文档地址
https://g2plot.antv.vision/zh/docs/manual/plots/line

# Change Log
0.0.1 初始版本--2020.5.7

# Demo
http://ngx-g2plot.asnyc.cn

# License
MIT
