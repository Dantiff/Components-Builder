
<script>
  export default {
    data() {
      return {
        markersStore: [],
        markers: [],
        center: { lat: -1.2920659, lng: 36.82194619999996 },
        zoom: 6,
        place: null,
        show: false,
      };
    },
    description: 'Autocomplete Example',
    methods: {
      setDescription(description) {
        this.description = description;
      },
      setPlace(place) {
        const setData = () => {
          const p = place.geometry.location;
          const position = { lat: p.lat(), lng: p.lng() };

          this.center = { ...position };
          this.markersStore = [...this.markersStore, { position }];
          this.place = place;
        };

        const update = async () => {
          await setData();
          return this.focus();
        };

        update();
      },
      focus(increament) {
        if (increament) {
          this.zoom = increament ? this.zoom + 1 : this.zoom;
        } else {
          this.zoom = 16;
        }
      },
      lockUserLocation() {
        const lock = async () => {
          navigator.geolocation.getCurrentPosition((p) => {
            const position = {
              lat: p.coords.latitude,
              lng: p.coords.longitude,
            };
            this.center = { ...position };
            this.place = null;
            this.markers = [{ position }];
          });
        };

        const update = async () => {
          await lock();
          return this.focus();
        };

        update();
      },
    },
  };
</script>

<template>
  <v-max-layout>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 lg12>
          <v-card-text>
            <GmapMap 
              style="width: 600px; height: 300px;" 
              :zoom="zoom" 
              :center="center"
              ref="locatorMap"
            >
              <v-toolbar
                color="white"
                floating
                dense
              >
                <v-tooltip right>
                  <v-btn 
                    icon
                    slot="activator"
                    @click="show = !show"
                  >
                    <v-icon>search</v-icon>
                  </v-btn>
                  <span>Click to expand search bar</span>
                </v-tooltip>

                <span v-if="show">
                  <GmapAutocomplete @place_changed="setPlace"></GmapAutocomplete>
                  <v-btn icon @click="lockUserLocation">
                    <v-icon>my_location</v-icon>
                  </v-btn>
                </span>
              </v-toolbar>
              <GmapMarker
                v-for="(m, i) in markers"
                :key="i"
                label="★"
                :title="'Gee!! This is the place I am now.'"
                :position="m.position"
                :clickable="true"
                @click="focus(true)"
              />
              <GmapMarker
                v-if="this.place"
                label="★"
                :title="'This is the place i\'m gonna visit next.'"
                :position="{
                  lat: this.place.geometry.location.lat(),
                  lng: this.place.geometry.location.lng(),
                }"
                :clickable="true"
                @click="focus(true)"
              />
            </GmapMap>
          </v-card-text>
          <v-card-text>
            <GmapMap style="width: 600px; height: 300px;" :zoom="1" :center="{lat: 0, lng: 0}">
              <GmapMarker v-for="(m, i) in markersStore"
                :key="i"
                :position="m.position"
              />
            </GmapMap>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
  </v-max-layout>
</template>
