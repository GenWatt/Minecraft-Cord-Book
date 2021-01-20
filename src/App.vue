<template>
  <div id="app">
    <transition name="message">
      <Message v-if="getMessage.message" />
    </transition>
    <Header />
    <CordList />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CordList from "./components/CordList/CordList.vue";
import Footer from "./components/Footer.vue";
import Message from "./components/Message";

export default {
  name: "App",
  components: {
    Header,
    CordList,
    Footer,
    Message,
  },
  computed: {
    getMessage() {
      return this.$store.getters.getMessage;
    },
  },
  created() {
    const cords = localStorage.getItem("cords");
    this.$store.commit("getAllCords", JSON.parse(cords));
  },
};
</script>

<style>
:root {
  --primary-color: rgba(255, 255, 255, 0.295);
  --secondary-color: rgba(255, 255, 255, 0.575);
  --input-color: rgba(156, 240, 156, 0.541);
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-image: url("./assets/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
}

#app {
  min-height: 100vh;
  display: grid;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.message-enter-active,
.message-leave-active {
  transition: opacity 0.3s;
}

.message-leave-to,
.message-enter {
  opacity: 0;
}

@media screen and (max-width: 400px) {
  html {
    font-size: 14px;
  }
}
</style>
