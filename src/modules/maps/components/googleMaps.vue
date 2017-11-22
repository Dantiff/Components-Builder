
<script>
  export default {
    data() {
      return {
        markers: [],
        place: null,
      };
    },
    description: 'Autocomplete Example (#164)',
    methods: {
      setDescription(description) {
        this.description = description;
      },
      setPlace(place) {
        this.place = place;
      },
      usePlace() {
        if (this.place) {
          this.markers.push({
            position: {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng(),
            },
          });
          this.place = null;
        }
      },
    },
  };
</script>

<template>
  <v-max-layout>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 lg12>
          <div>
            <label>
              AutoComplete
              <GmapAutocomplete @place_changed="setPlace">
              </GmapAutocomplete>
              <button @click="usePlace">Add</button>
            </label>
            <br/>

            <GmapMap style="width: 600px; height: 300px;" :zoom="1" :center="{lat: 0, lng: 0}">
              <GmapMarker v-for="(marker, index) in markers"
                :key="index"
                :position="marker.position"
                />
              <GmapMarker
                v-if="this.place"
                label="★"
                :position="{
                  lat: this.place.geometry.location.lat(),
                  lng: this.place.geometry.location.lng(),
                }"
                />
            </GmapMap>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-max-layout>
</template>
