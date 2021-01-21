<template>
  <main>
    <transition name="show">
      <Form v-if="showForm" :hideForm="hideForm" :edited="edited" />
    </transition>

    <Search :showAddCordForm="showAddCordForm" />

    <ul class="list" :class="searchCords.length >= 5 ? 'scroll' : ''">
      <!--when is no cord item -->
      <p class="no-cords" v-if="!searchCords.length">No cords saved!</p>
      <!--when is one cord item -->
      <transition name="show-cords-list" v-if="searchCords.length === 1">
        <li class="item-box" v-for="cord in searchCords" :key="cord.id">
          <Cord :cord="cord" :editCord="editCord" />
        </li>
      </transition>
      <!--when is more than one cord item -->
      <transition-group name="show-cords-list" v-if="searchCords.length > 1">
        <li class="item-box" v-for="cord in searchCords" :key="cord.id">
          <Cord :cord="cord" :editCord="editCord" />
        </li>
      </transition-group>
    </ul>
  </main>
</template>

<script>
import Form from "../Form";
import Search from "./Search";
import Cord from "./Cord";
import "../../assets/css/cordList.css";

export default {
  name: "CordList",
  components: { Form, Search, Cord },
  computed: {
    getCords() {
      return this.$store.getters.getCords;
    },
    getSearch() {
      return this.$store.getters.getSearch;
    },
    searchCords() {
      return this.getCords.filter(({ title }) =>
        title.toUpperCase().includes(this.getSearch)
      );
    },
  },
  data: () => ({ showForm: false, edited: "" }),
  methods: {
    showAddCordForm() {
      this.showForm = true;
    },

    hideForm() {
      this.showForm = false;
      this.edited = "";
    },

    editCord(id) {
      this.edited = id;
      this.showForm = true;
    },
  },
};
</script>