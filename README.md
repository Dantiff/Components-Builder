# Components-Builder
> A vuejs app carrying **_multiple custom-components_** commonly shared within different apps

Table of Contents
-----------------

[**Material UI**](#material-ui)

[**Charts**](#charts)
* [**D3 Charts**](#d3Charts)
  * [**Force Directed Node Focus**](#force-directed-node-focus)
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

<a name="d3Charts"></a>
  *   <h3><a href="https://github.com/d3/d3/wiki">D3 Charts</a></h3>
      
      D3 (Data-Driven Documents or D3.js) is a JavaScript library for visualizing data using web standards. D3 helps you bring data to life using SVG, Canvas and HTML. D3 combines powerful visualization and interaction techniques with a data-driven approach to DOM manipulation, giving you the full capabilities of modern browsers and the freedom to design the right visual interface for your data. 

      * 
        #### Force Directed Node Focus
        ##### Example
        Sample code for a complete component with sample data is given at
        **_[forceDirectedD3Chart.vue](https://github.com/Dantiff/Components-Builder/blob/master/src/modules/charts/components/forceDirectedD3Chart.vue)_**
        

<a name="highcharts"></a>
  *   <h3><a href="https://github.com/weizhenye/vue-highcharts">Highcharts</a></h3>
      
      [Highcharts Configuration Syntax](https://www.tutorialspoint.com/highcharts/highcharts_configuration_syntax.htm) provides the configuration required to draw charts and as well provides a sample for drawing `multi-linear` and `time series` charts. However, all examples are provided in `es5` JavaScript syntax. Below is a result of the same using `es6` JS syntax.
      
      Before you can start using highcarts, there are a number of configurations that must be done and which must be      included in the app's `bootstrap.js` file. All configs required in order to use either `highcharts, highstock, highmaps, drilldown, solid guage or highcharts more` are listed as follows:
      
      ```
      import VueHighcharts from 'vue-highcharts';
      import Highcharts from 'highcharts';

      // load these modules as your need
      import loadStock from 'highcharts/modules/stock';
      import loadMap from 'highcharts/modules/map';
      import loadDrilldown from 'highcharts/modules/drilldown';
      // some charts like solid gauge require `highcharts-more.js`, you can find it in official demo.
      import loadHighchartsMore from 'highcharts/highcharts-more';
      import loadSolidGauge from 'highcharts/modules/solid-gauge';

      loadStock(Highcharts);
      loadMap(Highcharts);
      loadDrilldown(Highcharts);
      loadHighchartsMore(Highcharts);
      loadSolidGauge(Highcharts);

      // Now you can use Highstock, Highmaps, drilldown and solid gauge.
      Vue.use(VueHighcharts, { Highcharts });
      ```
      * 
        #### MultiLinear charts
        ##### Example
        Sample code for a complete component with sample data is given at
        **_[multiLinearChart.vue](https://github.com/Dantiff/Components-Builder/blob/master/src/modules/charts/components/multiLinearChart.vue)_**
        
      * 
        #### TimeSeries Charts 
        
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
         To mount the chart, pass the `$options` to the `options prop` of the highcharts component as follows:
         ```
          <highcharts :options="options" ref="timeseries"></highcharts>
          ```

         ##### Example
         Sample code for a complete component with sample data is given at
         **_[multiLinearChart.vue](https://github.com/Dantiff/Components-Builder/blob/master/src/modules/charts/components/multiLinearChart.vue)_**


<a name="chartjs"></a>
  *   <h3><a href="http://www.chartjs.org/samples/latest/">ChartJS</a></h3>

      * 
        #### Pie charts
        ##### Example
        Sample code for a complete component with sample data is given at
        **_[multiLinearChart.vue](https://github.com/Dantiff/Components-Builder/blob/master/src/modules/charts/components/multiLinearChart.vue)_**
        
      * 
        #### Multilinear Charts
        ##### Example
        Sample code for a complete component with sample data is given at
        **_[multiLinearChart.vue](https://github.com/Dantiff/Components-Builder/blob/master/src/modules/charts/components/multiLinearChart.vue)_**
       


## Maps
Among the maps packages covered in the app include **_google maps_**. Detailed discussion on the same is provided as follows:

<a name="googlemaps"></a>
  *   <h3><a href="https://developers.google.com/maps/">Google Maps</a></h3>
      
      * 
        #### Google Maps- (using [Vue2-google-maps](https://github.com/xkjyeah/vue-google-maps))
        Before you can start using google maps (vue2-google-maps) in your vue app, the following configurations must be included in the app's `bootstrap.js` file. 
          ```
          import * as VueGoogleMaps from 'vue2-google-maps';

          Vue.use(VueGoogleMaps, {
            load: {
              key: 'AIzaSyBD-HS_7rOrfHc3O6hgTyBk31rUAnwD78o',
              libraries: 'places,drawing,visualization', // This is required if you use the Autocomplete plugin
              // OR: libraries: 'places,drawing'
              // OR: libraries: 'places,drawing,visualization'
              // (as you require)
            },
          });
          ```
        <h5>That's it!!</h5>
        All you need now is to add methods in your googlemaps component to improve the functionality and responsiveness of your maps. Below are some of the functions that give you the basic functionalities:

        ##### Set Location using auto-complete
        When using `vue2-google-maps'` autocomplete package, the following method will help you store and mark the selected location on the map.
          ```
          setPlace(place) {
            const setData = () => {
              const p = place.geometry.location;
              const position = { lat: p.lat(), lng: p.lng() };

              this.center = { ...position };
              this.place = place;

              // Update store data for later retrieval
              this.markersStore = [...this.markersStore, { position }];
            };

            // Sync and await for all data to be set before focusing on location
            const update = async () => {
              await setData();
              return this.focus();
            };

            update();
          },
          ```

        ##### Zoom and Focus on Location
        The following method allows user to conditionally increasing the zoom index of the map.
        
        __PS:__ `The map center has to be set to the location of interest for map to be able to zoom and focus on the intended location.`
          ```
           focus(increament) {
             // increament zoom only when specified. Otherwise zoom back to guage 16
             if (increament) {
               this.zoom = increament ? this.zoom + 1 : this.zoom;
             } else {
               this.zoom = 16;
             }
           },
           ```

        ##### Get Current Use Location
        This example uses __navigator__ to get the current location of the user and mark it on the map.
        
        __PS:__ `The user has to allow navigator to access device location before the actual location can be recorded.` 
          ```
          lockUserLocation() {
            const lock = async () => {
              navigator.geolocation.getCurrentPosition((p) => {
                const position = {
                  lat: p.coords.latitude,
                  lng: p.coords.longitude,
                };

                // Clear autocomplete and push location to map-markers
                this.center = { ...position };
                this.place = null;
                this.markers = [{ position }];
              });
            };

            // Sync and await for all data to be set before focusing on location
            const update = async () => {
              await lock();
              return this.focus();
            };

            update();
          },
          ```

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

