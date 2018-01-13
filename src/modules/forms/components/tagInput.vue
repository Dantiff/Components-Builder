
<script>
  export default {
    $validates: true,
    data() {
      return {
        selection: '',
        select: null,
        open: false,
        current: 0,
        suggestions: ['Intoxicating', 'Life', 'Command', 'Intense', 'Carrier', 'Dominant'],
      };
    },
    computed: {
      // Filtering the suggestion based on the input
      matches() {
        // eslint-disable-next-line
        return this.suggestions.filter((str) => {
          return str.indexOf(this.selection) >= 0;
        });
      },
      // The flag
      openSuggestion() {
        return this.selection !== '' &&
          this.matches.length !== 0 &&
          this.open === true;
      },
    },
    methods: {
      // When enter pressed on the input
      enter() {
        console.log('entered');
        this.selection = this.matches[this.current];
        this.open = false;
      },

      // When up pressed while suggestions are open
      up() {
        console.log('entered up');
        if (this.current > 0) {
          // eslint-disable-next-line
          this.current--;
        }
      },

      // When up pressed while suggestions are open
      down() {
        console.log('entered down');
        if (this.current < this.matches.length - 1) {
          // eslint-disable-next-line
          this.current++;
        }
      },

      // For highlighting element
      isActive(index) {
        return index === this.current;
      },

      // When the user changes input
      change() {
        console.log('changed');
        if (this.open === false) {
          this.open = true;
          this.current = 0;
        }
      },

      // When one of the suggestion is clicked
      suggestionClick(index) {
        this.selection = this.matches[index];
        this.open = false;
      },
    },
  };
</script>

<template>
  <v-max-layout>
    <v-container>
      <v-layout row wrap>
        <v-flex xs8 lg6>
          <v-card-text>
            <div style="position:relative" v-bind:class="{'open':openSuggestion}">
              <v-text-field
                v-model="selection"
                label="Add Tag"
                @keyup.enter = 'enter'
                @keyup.space = 'enter'
                @keyup.down = 'down'
                @keyup.up = 'up'
                @input = 'change'
              ></v-text-field>
              <ul class="dropdown-menu" style="width:100%">
                  <li v-for="(s, i) in matches"
                    :class="{'active': isActive(i)}"
                    @click="suggestionClick(i)"
                  >
                    <a href="#">{{ s }}</a>
                  </li>
              </ul>
            </div>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
  </v-max-layout>
</template>
