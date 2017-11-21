# Components-Builder
> An app carrying multiple custom components commonly shared within different apps

## Material UI
In this setup, the app selects __[Vuetify](https://vuetifyjs.com/)__, a popular material component framwork with over __6,500__ tags on github, to illustrate basic/advanced setup and usage of Google's material UI with VueJS.

## Charts
Since most of the advanced JavaScript chart packages and available tutorials and examples for the same conform to the es5 release of Javascript, this app takes an initiative to illustrate the usage of most popular and advance chart packages including **_chart.js_**, **_highcharts_**, and **_ndv3_** charts using the lastest es6 and es7 releases of JavaScript.
some of the chart examples covered in the app include:
### 1. [HighCharts](https://github.com/weizhenye/vue-highcharts)
#### + MultiLinear charts 

#### + TimeSeries Charts 
[Highcharts Configuration Syntax](https://www.tutorialspoint.com/highcharts/highcharts_configuration_syntax.htm) provides the configuration required to draw charts and as well provides a sample for drawing time series charts. However, all examples are provided in es5 JavaScript syntax. Below is a result of the same using es6 JS syntax.
##### Configuration
###### chart
Configure the chart to make it zoomable. chart.zoomType decides the dimensions by which the user can zoom by dragging the mouse. The possible values for this are x, y or xy.
```
 options: {
     chart: {
      zoomType: 'x',
    }
  }
```
###### plotOptions
Configure the area of chart using plotOptions.
```
import Highcharts from 'highcharts';

 options: {
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
  }
```
##### Example
Sample code for a complete component with sample data is given as:
######highchartsTimeSeriesChart.vue
```

<script>

  import Highcharts from 'highcharts';

  export default {
    data() {
      const data = [
        0.8446, 0.8445, 0.8444, 0.8451, 0.8418, 0.8264, 0.8258, 0.8232,
        0.7871, 0.7878, ... ... 0.7156, 0.7129, 0.7049, 0.7095,
      ];

      const options = {
        chart: {
          zoomType: 'x',
        },
        title: {
          text: 'USD to EUR exchange rate from 2006 through 2008',
        },
        subtitle: {
          text: document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
        },
        xAxis: {
          type: 'datetime',
          minRange: 14 * 24 * 3600000,
        },
        yAxis: {
          title: {
            text: 'Exchange rate',
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080',
          }],
        },
        tooltip: {
          valueSuffix: '',
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0,
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')],
              ],
            },
            marker: {
              radius: 2,
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1,
              },
            },
            threshold: null,
          },
        },
        series: [
          {
            name: 'USD to EUR',
            pointInterval: 24 * 3600 * 1000,
            pointStart: Date.UTC(2006, 0, 1),
            data,
          },
          {
            name: 'EUR to USD',
            pointInterval: 24 * 3600 * 1000,
            pointStart: Date.UTC(2006, 0, 1),
            data,
          },
        ],
      };
      return {
        options,
      };
    },
    methods: {},
  };
</script>

<template>
  <v-max-layout>
    <v-container fluid class="quotes">
      <v-slide-y-transition mode="out-in">
        <v-layout column align-left class="container"> 
          <highcharts :options="options" ref="timeseries"></highcharts>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </v-max-layout>
</template>

```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the __[docs for vue-loader](http://vuejs.github.io/vue-loader)__.

