<template>
  <section class="search-box">
    <input
      class="search-input"
      type="text"
      name="search"
      placeholder="Search..."
      v-model="search"
      @keyup="searchCord"
    />
    <button class="btn btn-circle add-to-do" @click="showAddCordForm">+</button>
  </section>
</template>
<script>
import "../../assets/css/search.css";
export default {
  name: "Search",
  props: ["showAddCordForm"],
  data: () => ({ search: "" }),
  methods: {
    searchCord() {
      this.$store.commit("searchCord", this.search.toUpperCase());
    },
  },
};
</script>
