
<script>

  export default {
    $validates: true,
    data() {
      return {
        selection: '',
        select: null,
        open: false,
        current: 0,
        suggestions: [
          { name: 'Intoxicating', slug: 'intoxicating', selected: false },
          { name: 'Life', slug: 'life', selected: false },
          { name: 'Command', slug: 'command', selected: false },
          { name: 'Intense', slug: 'intense', selected: false },
          { name: 'Carrier', slug: 'carrier', selected: false },
          { name: 'Dominant', slug: 'dominant', selected: false },
        ],
      };
    },
    computed: {
      // Filtering the suggestion based on the input
      matches() {
        // eslint-disable-next-line
        return this.suggestions.filter((s) => {
          return s.name.indexOf(this.selection) >= 0 && !s.selected;
        });
      },
      // Filtering the matches to get the selected tags
      selectedTags() {
        // eslint-disable-next-line
        return this.suggestions.filter((s) => {
          return s.selected;
        });
      },
      // The flag
      openSuggestion() {
        return this.matches.length !== 0 &&
          this.open === true;
      },
    },
    watch: {
      suggestions: {
        handler() {
          console.log('suggestions changed', this.suggestions);
        },
        deep: true,
      },
    },
    methods: {
      // When enter pressed on the input
      enter() {
        this.matches[this.current].selected = true;
        this.selection = '';
        this.open = false;
        console.log('entered', this.selectedTags);
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

      // When the user leaves input field
      blur() {
        setTimeout(() => {
          this.open = false;
        }, 500);
      },

      // When one of the suggestion is clicked
      suggestionClick(index) {
        this.matches[index].selected = true;
        this.selection = '';
        this.open = false;
        console.log('entered', this.selectedTags);
      },

      // Remove tag from list of selected
      remove(i) {
        const clonedValue = this.selectedTags.slice();
        clonedValue.splice(i, 1);
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
            <div 
              style="position:relative" 
              class="tag-input" 
              :class="{'open':openSuggestion}"
            >
              <v-text-field
                v-model="selection"
                label="Add Tag"
                @keyup.enter = 'enter'
                @keyup.down = 'down'
                @keyup.up = 'up'
                @input = 'change'
                @focus = 'change'
                @blur = 'blur'
              ></v-text-field>
              <ul class="dropdown-menu" style="width:100%">
                  <li 
                    v-for="(s, i) in matches"
                    :class="{'active': isActive(i)}"
                    @click="suggestionClick(i)"
                  >
                    <a href="#">{{ s.name }}</a>
                  </li>
              </ul>
              <div class="selected-tags">
                <span 
                  v-for="(t, i) in selectedTags"
                  class="tag"
                >
                  <v-chip 
                    close
                    v-model="t.selected"
                    color="red"
                    dark
                    label
                  > {{ t.name }} </v-chip>
                  <!-- 
                  <v-icon 
                    dark 
                    right 
                    color="red"
                    @click="remove(i)"
                  >clear</v-icon> -->
                </span>
              </div>
            </div>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
  </v-max-layout>
</template>

<style lang='stylus'>
  .tag-input
    .input-group
      .input-group__details
        min-height 0 !important
    .dropdown-menu
      margin 0
    .selected-tags
      .tag
        .chip--label
          border-radius 5px
        .chip__content
          color #ffffff
          height 16px
          padding 0 0px 0 5px
          font-size 12.5px
          font-weight 400
          border-radius 4px
          .chip__close
            margin 0 2px 0 2px
            .icon
              font-size 13px
</style>
