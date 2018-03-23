
<script>
  export default {
    data() {
      return {
        resumes: [
          {
            title: 'Resume samples',
            text: 'A es6-based implementation of Vue Resumes',
            resumes: [
              { link: { name: 'resume.one' }, title: 'The 1st resume sample' },
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
                  <v-expansion-panel-content v-for="(r,i) in resumes" :key="i">
                    <div slot="header">
                      <h4> {{ resume.title }} </h4>
                      <p> {{ resume.text }} </p>
                    </div>
                    <v-card v-for="(r,i) in resume.resumes" :key="i">
                      <v-card-text class="grey lighten-3">
                        <blockquote>
                          <router-link :to="r.link"> {{ r.title }} </router-link>
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
