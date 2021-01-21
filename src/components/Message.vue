<template>
  <aside class="alert" :class="getMessage.type">
    <button class="btn close-msg" @click="closeMessage">
      <i class="fas fa-times"></i>
    </button>
    <p>{{ getMessage.message }}</p>
  </aside>
</template>
<script>
import "../assets/css/message.css";
export default {
  name: "Message",
  computed: {
    getMessage() {
      return this.$store.getters.getMessage;
    },
  },
  created() {
    setTimeout(() => this.closeMessage(), 5000);
  },
  methods: {
    closeMessage() {
      this.$store.commit("closeMessage");
    },
  },
};
</script>