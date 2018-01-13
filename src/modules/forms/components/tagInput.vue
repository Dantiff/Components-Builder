
<script>
  export default {
    $validates: true,
    data() {
      return {
        name: '',
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
        ],
      };
    },
    methods: {
      submit() {
        this.$validator.validateAll();
      },
      clear() {
        this.name = '';
        this.select = null;
        this.$validator.clean();
      },
      // When enter pressed on the input
      enter() {
        console.log('entered');
        // this.selection = this.matches[this.current];
        // this.open = false;
      },

      // When up pressed while suggestions are open
      up() {
        console.log('entered up');
        // if(this.current > 0)
        //   this.current--;
      },

      // When up pressed while suggestions are open
      down() {
        console.log('entered down');
        // if(this.current < this.matches.length - 1)
        //   this.current++;
      },

      // For highlighting element
      isActive(index) {
        return index === this.current;
      },

      // When the user changes input
      change() {
        console.log('changed');
        // if (this.open == false) {
        //   this.open = true;
        //   this.current = 0;
        // }
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
            <form>
              <v-text-field
                v-model="name"
                label="Name"
                :counter="10"
                :error-messages="errors.collect('name')"
                v-validate="'required|max:10'"
                data-vv-name="name"
                required
                @keyup.enter = 'enter'
                @keyup.space = 'enter'
                @keyup.down = 'down'
                @keyup.up = 'up'
                @input = 'change'
              ></v-text-field>

              <v-btn @click="submit">submit</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </form>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
  </v-max-layout>
</template>
