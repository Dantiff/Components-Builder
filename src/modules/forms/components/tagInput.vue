
<script>
  
  import Vue from 'vue';

  Vue.component('vueMaterialTagInput', require('./vueMaterialTagInput.vue'));

  export default {
    data() {
      return {
        suggestions: [
          { name: 'Intoxicating', selected: false, color: 'red' },
          { name: 'Life', selected: false, color: 'blue' },
          { name: 'Command', selected: false, color: 'grey' },
          { name: 'Intense', selected: false, color: 'orange' },
          { name: 'Carrier', selected: false, color: 'yellow' },
          { name: 'Dominant', selected: false, color: 'black' },
        ],
        canCreateTags: true,
        selection: '',
      };
    },
  };
</script>

<template>
  <v-max-layout>
    <v-container>
      <v-layout row wrap>
        <v-flex xs8 lg6>
          <v-card-text>
            <vue-material-tag-input v-bind="{suggestions, canCreateTags}"></vue-material-tag-input>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
  </v-max-layout>
</template>
