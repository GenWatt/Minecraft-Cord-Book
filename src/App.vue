<template>
  <div id="app">
    <transition name="message">
      <Message v-if="getMessage.message" />
    </transition>
    <Header />
    <CordWrapper />
    <CordList :cords="searchCords" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CordList from "./components/CordList/CordList.vue";
import Footer from "./components/Footer.vue";
import Message from "./components/Message";
import CordWrapper from "./components/CordWrapper/CordWrapper.vue";
import "./assets/css/app.css";

export default {
  name: "App",
  components: {
    Header,
    CordList,
    Footer,
    Message,
    CordWrapper,
  },
  computed: {
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
      return this.getCords.filter(({ title }) =>
        title.toUpperCase().includes(this.getSearch)
      );
    },
  },
  created() {
    const cords = localStorage.getItem("cords");
    this.$store.commit("getAllCords", JSON.parse(cords));
  },
};
</script>