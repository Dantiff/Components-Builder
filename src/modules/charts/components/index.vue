
<script>
  export default {
    data() {
      return {
        charts: [
          {
            title: 'Highcharts',
            text: 'A es6-based implementation of highcharts',
            charts: [
              { link: { name: 'charts.highcharts.multilinear' }, title: 'Highcharts: Multilinear' },
              { link: { name: 'charts.highcharts.timeseries' }, title: 'Highcharts: Time Series' },
            ],
          },
          {
            title: 'Chart.js',
            text: 'A es6-based implementation of chart.js',
            charts: [
              { link: { name: 'charts.highcharts.multilinear' }, title: 'Highcharts: Multilinear' },
              { link: { name: 'charts.highcharts.timeseries' }, title: 'Highcharts: Time Series' },
            ],
          },
        ],
      };
    },
  };
</script>

<template>
  <v-max-layout>
    <v-container fluid class="quotes">
      <v-slide-y-transition mode="out-in">
        <v-layout column align-left class="container">
          <v-container>
            <v-layout row wrap>
              <v-flex xs12 lg12>
                <v-expansion-panel popout>
                  <v-expansion-panel-content v-for="(chart,i) in charts" :key="i">
                    <div slot="header">
                      <h4> {{ chart.title }} </h4>
                      <p> {{ chart.text }} </p>
                    </div>
                    <v-card v-for="(c,i) in chart.charts" :key="i">
                      <v-card-text class="grey lighten-3">
                        <blockquote>
                          <router-link :to="c.link"> {{ c.title }} </router-link>
                          <footer>
                            <small>
                              <em>&mdash;Carl Dantiff</em>
                            </small>
                          </footer>
                        </blockquote>
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>
              <v-flex xs12 lg12>
                <v-card-text>
                  <blockquote>
                    &#8220;The best performance improvement is the transition from the nonworking state to the working state.&#8221;
                    <footer>
                      <small>
                        <em>&mdash;J. Osterhout</em>
                      </small>
                    </footer>
                  </blockquote>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </v-max-layout>
</template>
