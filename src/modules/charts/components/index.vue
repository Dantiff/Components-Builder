
<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<template>
  <v-max-layout>
    <v-container fluid class="quotes">
      <v-slide-y-transition mode="out-in">
        <v-layout column align-left class="container">
          <blockquote>
            <router-link :to="{ name: 'charts.highcharts.multilinear' }"> Highcharts: Multilinear </router-link>
            <footer>
              <small>
                <em>&mdash;Carl Dantiff</em>
              </small>
            </footer>
          </blockquote>
          <blockquote>
            <router-link :to="{ name: 'charts.highcharts.timeseries' }"> Highcharts: Time Series </router-link>
            <footer>
              <small>
                <em>&mdash;Carl Dantiff</em>
              </small>
            </footer>
          </blockquote>
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
