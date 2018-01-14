
<script>
  
  import { Compact } from 'vue-color';

  export default {
    $validates: true,
    components: {
      'compact-picker': Compact,
    },
    data() {
      return {
        selection: '',
        current: 0,
        openSuggestionMenu: false,
        openTagForm: false,
        suggestions: [
          { name: 'Intoxicating', slug: 'intoxicating', selected: false, color: 'red' },
          { name: 'Life', slug: 'life', selected: false, color: 'blue' },
          { name: 'Command', slug: 'command', selected: false, color: 'grey' },
          { name: 'Intense', slug: 'intense', selected: false, color: 'orange' },
          { name: 'Carrier', slug: 'carrier', selected: false, color: 'yellow' },
          { name: 'Dominant', slug: 'dominant', selected: false, color: 'black' },
        ],
        colors: {
          hex: '#194d33',
          hsl: {
            h: 150,
            s: 0.5,
            l: 0.2,
            a: 1,
          },
          hsv: {
            h: 150,
            s: 0.66,
            v: 0.30,
            a: 1,
          },
          rgba: {
            r: 25,
            g: 77,
            b: 51,
            a: 1,
          },
          a: 1,
        },
      };
    },
    computed: {
      matches() {
        // eslint-disable-next-line
        return this.suggestions.filter((s) => {
          return s.name.indexOf(this.selection) >= 0 && !s.selected;
        });
      },
      selectedTags() {
        // eslint-disable-next-line
        return this.suggestions.filter((s) => {
          return s.selected;
        });
      },
      openFullTagForm() {
        return this.matches.length === 0 && this.openTagForm === true;
      },
      openFullSuggestionMenu: {
        get() {
          return this.matches.length !== 0 && this.openSuggestionMenu === true;
        },
        set(newValue) {
          setTimeout(() => {
            this.openSuggestionMenu = newValue;
          }, 100);
        },
      },
    },
    watch: {
      matches: {
        handler() {
          if (this.matches.length === 0) {
            // console.log('zero matches', this.matches);
          }
        },
        deep: true,
      },
    },
    methods: {
      // When enter pressed on the input
      enter() {
        if (this.matches.length === 0) {
          console.log('zero matches on enter', this.selection);
          this.suggestions.push({ name: this.selection, selected: true, color: '#003300' });
        } else {
          this.matches[this.current].selected = true;
        }
        this.selection = '';
        setTimeout(() => {
          this.openSuggestionMenu = false;
        }, 100);
      },

      // When up pressed while suggestions are open
      up() {
        if (this.current > 0) {
          // eslint-disable-next-line
          this.current--;
        }
      },

      // When up pressed while suggestions are open
      down() {
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
        if (this.openSuggestionMenu === false) {
          setTimeout(() => {
            this.openSuggestionMenu = true;
            this.current = 0;
          }, 100);
        }

        if (this.matches.length === 0) {
          console.log('zero matches on change', this.selection);
          this.openTagForm = true;
        }
      },

      // When the user leaves input field
      blur() {
        setTimeout(() => {
          this.openSuggestionMenu = false;
          this.openTagForm = false;
        }, 100);
      },

      // When one of the suggestion is clicked
      suggestionClick(index) {
        this.matches[index].selected = true;
        this.selection = '';
        setTimeout(() => {
          this.openSuggestionMenu = false;
        }, 100);
      },
      updateValue(val) {
        console.log('color picker new value', val);
        this.colors = val;
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
              :class="{'open':open}"
            >
              <v-menu 
                offset-y 
                v-model='open'
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
                  slot="activator"
                ></v-text-field>
                <v-list 
                  class="menu-list"
                  :class="{'menu-list-closed':!openFullSuggestionMenu}"
                  v-if="openFullSuggestionMenu"
                >
                  <v-list-tile
                      v-for="(s, i) in matches"
                      :class="{'active': isActive(i)}"
                      :key='i'
                      @click="suggestionClick(i)"
                  >
                    <v-list-tile-title>{{ s.name }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
                <v-list 
                  class="tag-form"
                  :class="{'tag-form-closed':!openFullTagForm}"
                  v-if="!openFullTagForm"
                >
                 <v-card-text> 
                   form open 
                   <compact-picker :value="colors" @input="updateValue"></compact-picker>
                 </v-card-text>
                </v-list>
              </v-menu>
              <div class="selected-tags">
                <span 
                  v-for="(t, i) in selectedTags"
                  class="tag"
                >
                  <v-chip 
                    close
                    v-model="t.selected"
                    dark
                    label
                    :style="'background-color:' + t.color + '; border-color:' + t.color"
                  > {{ t.name }} </v-chip>
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
    .menu
      width 100%
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
  .menu-list-closed
    display none
  .menu-list
    padding 2px 0
    .active
      a
        background-color #99bbff
    li
      a
        height unset
        display block
        padding 3px 20px
        clear both
        font-weight normal
        font-size 1.1em
        line-height 1.45
        color #333333
        &:hover, &:focus
          background-color rgba(0,0,0,.12)
</style>
