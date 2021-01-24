<template>
  <div id="app">
    <transition name="message">
      <Message v-if="getMessage.message" />
    </transition>
    <Header :appName="appName" />
    <CordWrapper />
    <SetPlaces />
    <CordList :cords="searchCords" />
    <Footer />
  </div>
</template>

<script>
import Message from "./components/Message/Message";
import Header from "./components/Header/Header";
import CordWrapper from "./components/CordWrapper/CordWrapper.vue";
import SetPlaces from "./components/SetPlaces/SetPlaces";
import CordList from "./components/CordList/CordList.vue";
import Footer from "./components/Footer/Footer";

import "./app.css";

export default {
  name: "App",
  data: () => ({ appName: "Minecraft Cord Book" }),
  components: {
    Header,
    CordList,
    Footer,
    Message,
    CordWrapper,
    SetPlaces,
  },
  computed: {
    getCurrentPlace() {
      return this.$store.getters.getCurrentPlace;
    },
    getMessage() {
      return this.$store.getters.getMessage;
    },
    getCords() {
      return this.$store.getters.getCords;
    },
    getSearch() {
      return this.$store.getters.getSearch;
    },
    searchCords() {
      const currentPlace = this.getCurrentPlace;
      if (this.getCords[currentPlace].length)
        return this.getCords[currentPlace].filter(({ title }) =>
          title.toUpperCase().includes(this.getSearch)
        );
      else return [];
    },
  },
  created() {
    const savedCords = localStorage.getItem("cords");
    this.$store.commit("getAllCords", JSON.parse(savedCords));
  },
};
</script>