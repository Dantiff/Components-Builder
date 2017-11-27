/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */


/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  // Login
  {
    path: '/login',
    name: 'login.index',
    component: require('@/modules/auth/components/login.vue'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: require('@/modules/auth/components/register.vue'),
    meta: {
      guest: true,
    },
  },

  // Home
  {
    path: '/home',
    name: 'home.index',
    component: require('@/modules/shared/components/home.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: require('@/modules/account/components/index.vue'),
    meta: {
      auth: true,
    },
  },

  // Charts
  {
    path: '/charts',
    name: 'charts.index',
    component: require('@/modules/charts/components/index.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/charts/highcharts/multilinear',
    name: 'charts.highcharts.multilinear',
    component: require('@/modules/charts/components/multiLinearChart.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/charts/highcharts/timeseries',
    name: 'charts.highcharts.timeseries',
    component: require('@/modules/charts/components/timeSeriesChart.vue'),
    meta: {
      auth: true,
    },
  },

  // Maps
  {
    path: '/maps',
    name: 'maps.index',
    component: require('@/modules/maps/components/index.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/maps/googlemaps',
    name: 'maps.googlemaps',
    component: require('@/modules/maps/components/googleMaps.vue'),
    meta: {
      auth: true,
    },
  },

  // Forms
  {
    path: '/forms',
    name: 'forms.index',
    component: require('@/modules/forms/components/index.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/forms/vuetify/validations',
    name: 'forms.vuetify.validations',
    component: require('@/modules/forms/components/validations.vue'),
    meta: {
      auth: true,
    },
  },

  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/*',
    redirect: '/home',
  },
];
