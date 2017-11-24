# Components-Builder
> A vuejs app carrying **_multiple custom-components_** commonly shared within different apps

Table of Contents
-----------------

[**Material UI**](#material-ui)

[**Charts**](#charts)
* [**Highcharts**](#highcharts)
  * [**MultiLinear Chart**](#multilinear-highcharts)
  * [**TimeSeries Chart**](#timeseries-highcharts)
* [**ChartJS**](#chartjs)
  * [**Pie Chart**](#pie-chartjs)
  * [**Multilinear Chart**](#multilear-chartjs)
  
[**Maps**](#maps)
* [**Google Maps**](#googlemaps)

[**Build Setup**](#build-setup)


<a name="material-ui"></a>
## Material UI
In this setup, the app selects __[Vuetify](https://vuetifyjs.com/)__, a popular material component framwork with over __6,500__ tags on github, to illustrate basic/advanced setup and usage of Google's material UI with VueJS.

## Charts
Since most of the advanced JavaScript chart packages and available tutorials and examples for the same conform to the es5 release of Javascript, this app takes an initiative to illustrate the usage of most popular and advance chart packages including **_chart.js_**, **_highcharts_**, and **_ndv3_** charts using the lastest es6 and es7 releases of JavaScript.
some of the chart examples covered in the app include:

<a name="highcharts"></a>
### [1. Highcharts](https://github.com/weizhenye/vue-highcharts)

  <a name="multilinear-highcharts"></a>
  #### i. MultiLinear charts 

  ##### Example
  Sample code for a complete component with sample data is given at
  **_[multiLinearChart.vue](https://github.com/Dantiff/Components-Builder/blob/master/src/modules/charts/components/multiLinearChart.vue)_**

  <a name="timeseries-highcharts"></a>
  #### ii. TimeSeries Charts 
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

  ###### Display
  To mount the chart, pass the $options to the options prop of the highcharts component as follows:
  ```
   <highcharts :options="options" ref="timeseries"></highcharts>
   ```

  ##### Example
  Sample code for a complete component with sample data is given at
  **_[multiLinearChart.vue](https://github.com/Dantiff/Components-Builder/blob/master/src/modules/charts/components/multiLinearChart.vue)_**

<a name="chartjs"></a>
### [2. ChartJS](http://www.chartjs.org/samples/latest/)

  <a name="pie-chartjs"></a>
  #### i. Pie charts 

  ##### Example
  Sample code for a complete component with sample data is given at
  **_[multiLinearChart.vue](https://github.com/Dantiff/Components-Builder/blob/master/src/modules/charts/components/multiLinearChart.vue)_**

  <a name="multilinear-charts"></a>
  #### ii. Multilinear Charts 
  [Highcharts Configuration Syntax](https://www.tutorialspoint.com/highcharts/highcharts_configuration_syntax.htm) provides the configuration required to draw charts and as well provides a sample for drawing time series charts. However, all examples are provided in es5 JavaScript syntax. Below is a result of the same using es6 JS syntax.
  ##### Configuration
  ###### Display
  To mount the chart, pass the $options to the options prop of the highcharts component as follows:
  ```

   ```
  ##### Example
  Sample code for a complete component with sample data is given at
  **_[multiLinearChart.vue](https://github.com/Dantiff/Components-Builder/blob/master/src/modules/charts/components/multiLinearChart.vue)_**



## Maps
  Among the maps packages covered in the app include **_google maps_**. Detailed discussion on the same is provided as follows:

  <a name="googlemaps"></a>
  ### [1. Google Maps](https://developers.google.com/maps/)
  #### * [Google Maps](https://github.com/xkjyeah/vue-google-maps)- (using Vue2-google-maps)

  ##### Example
  Sample code for a complete component with sample data is given at
  **_[googleMaps.vue](https://github.com/Dantiff/Components-Builder/blob/master/src/modules/maps/components/googleMaps.vue)_**

  <a name="#build-setup"></a>
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

