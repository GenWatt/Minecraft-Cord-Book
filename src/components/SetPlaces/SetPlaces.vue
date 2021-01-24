<template>
  <nav>
    <ul class="set-place">
      <li v-for="place in getPlaces" :key="place">
        <button
          class="place-btn btn"
          :class="getCurrentPlace === place.toLowerCase() ? 'active' : ''"
          @click="setPlace(place)"
        >
          {{ place }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import "./setPlaces.css";

export default {
  name: "SetPlaces",
  computed: {
    getPlaces() {
      return this.$store.getters.getPlaces;
    },
    getCurrentPlace() {
      return this.$store.getters.getCurrentPlace;
    },
  },
  methods: {
    setPlace(place) {
      this.$store.commit("setPlace", place);
    },
  },
};
</script>