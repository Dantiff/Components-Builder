
<script>
  export default {
    data() {
      return {
        forms: [
          {
            title: 'Form Components',
            text: 'A es6-based implementation of Vue Forms',
            forms: [
              { link: { name: 'forms.vuetify.validations' }, title: 'Vuetify form validations using Vee-validate' },
              { link: { name: 'forms.vuetify.tag-input' }, title: 'Material based tag-input component' },
            ],
          },
        ],
      };
    },
  };
</script>

<template>
  <v-max-layout>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 lg12>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12 lg12>
                <v-expansion-panel popout>
                  <v-expansion-panel-content v-for="(form,i) in forms" :key="i">
                    <div slot="header">
                      <h4> {{ form.title }} </h4>
                      <p> {{ form.text }} </p>
                    </div>
                    <v-card v-for="(f,i) in form.forms" :key="i">
                      <v-card-text class="grey lighten-3">
                        <blockquote>
                          <router-link :to="f.link"> {{ f.title }} </router-link>
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
        </v-flex>
      </v-layout>
    </v-container>
  </v-max-layout>
</template>
