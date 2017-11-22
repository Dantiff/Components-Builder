
<script>
  export default {
    data() {
      return {
        highcharts: [
          { link: { name: 'charts.highcharts.multilinear' }, title: 'Highcharts: Multilinear' },
          { link: { name: 'charts.highcharts.timeseries' }, title: 'Highcharts: Time Series' },
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
              <v-flex xs12 lg5>
                <v-expansion-panel popout>
                  <v-expansion-panel-content>
                    <div slot="header">Highcharts</div>
                    <v-card v-for="(chart,i) in highcharts" :key="i">
                      <v-card-text class="grey lighten-3">
                        <blockquote>
                          <router-link :to="chart.link"> {{ chart.title }} </router-link>
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
            </v-layout>
          </v-container>
          <blockquote>
            &#8220;The best performance improvement is the transition from the nonworking state to the working state.&#8221;
            <footer>
              <small>
                <em>&mdash;J. Osterhout</em>
              </small>
            </footer>
          </blockquote>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </v-max-layout>
</template>
