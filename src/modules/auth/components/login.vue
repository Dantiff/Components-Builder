<template>
  <v-app id="example-1" standalone>
    <v-container fluid auth-container>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1 sm8 offset-sm2 md4 offset-md4>
          <v-card>
            <v-toolbar class="indigo" dark>
              <v-btn icon light>
                <v-icon>users</v-icon>
              </v-btn>
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <form @submit.prevent="login(user)">
              <v-card-text>
                <h1 class="title">Enter credentials to login</h1>
                <v-flex xs12>
                  <v-text-field
                    label="E-mail"
                    v-model="user.email"
                    :rules="[rules.required, rules.email]"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    v-model="user.password"
                    min="8"
                    :append-icon="seePassword ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (seePassword = !seePassword)"
                    :type="seePassword ? 'password' : 'text'"
                    counter
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 class="login-footer">
                  <v-btn primary type="submit" dark>Login</v-btn>
                  <span class="register">
                    No account?
                    <router-link :to="{ name: 'register.index' }">Register</router-link>
                  </span>
                </v-flex>
              </v-card-text>
            </form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

 <script>

  import authService from '@/services/auth';

  export default {
    data() {
      return {
        seePassword: true,
        user: {
          email: null,
          password: null,
        },
        rules: {
          required: value => !!value || 'Required.',
          email: (value) => {
            // eslint-disable-next-line 
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || 'Invalid e-mail.';
          },
        },
      };
    },
    methods: {
      login(user) {
        // eslint-disable-next-line 
        console.log('lets authenticare');
        authService.login(user);
      },
    },
  };
</script>
