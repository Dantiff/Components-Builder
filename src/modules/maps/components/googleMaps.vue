
<script>
  export default {
    data() {
      return {
        markersStore: [],
        markers: [],
        center: { lat: -1.2920659, lng: 36.82194619999996 },
        zoom: 7,
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
      focus() {
        this.zoom = 15;
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
                  <v-btn icon @click="focus">
                    <v-icon>my_location</v-icon>
                  </v-btn>
                </span>
              </v-toolbar>
              <GmapMarker
                v-if="this.place"
                label="★"
                :position="{
                  lat: this.place.geometry.location.lat(),
                  lng: this.place.geometry.location.lng(),
                }"
                :clickable="true"
                @click="focus"
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
