
<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { link: { name: 'charts.index' }, icon: 'bubble_chart', title: 'Chart Components' },
          { link: { name: 'maps.index' }, icon: 'my_location', title: 'Map Components' },
          { link: { name: 'forms.index' }, icon: 'receipt', title: 'Form Components' },
          { link: { name: 'resume.index' }, icon: 'receipt', title: 'Resume Builder' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Components Builder',
      };
    },
  };
</script>

<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <router-link 
            v-for="(item, i) in items"
            :key="i"
            value="true"
            :to="item.link"
        >
          <v-list-tile>
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn 
        icon
        @click.native.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title>
        <router-link :to="{ name: 'home.index' }"> {{ title }} </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.native.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>

            <!-- Children components fit here -->            
            <slot></slot>

          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      fixed
      :right="right"
      v-model="rightDrawer"
      app
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <div class="align-center text-xs-center">Carl Dantiff &copy;2017. All Rights Reserved</div>
    </v-footer>
  </v-app>
</template>

