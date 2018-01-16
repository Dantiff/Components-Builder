
<script>
  
  import Vue from 'vue';

  Vue.component('vueMaterialTagInput', require('./vueMaterialTagInput.vue'));

  export default {
    data() {
      return {
        suggestions: [
          { name: 'Intoxicating', slug: 'intoxicating', selected: false, color: 'red' },
          { name: 'Life', slug: 'life', selected: false, color: 'blue' },
          { name: 'Command', slug: 'command', selected: false, color: 'grey' },
          { name: 'Intense', slug: 'intense', selected: false, color: 'orange' },
          { name: 'Carrier', slug: 'carrier', selected: false, color: 'yellow' },
          { name: 'Dominant', slug: 'dominant', selected: false, color: 'black' },
        ],
        canCreateTags: true,
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
