<template>
  <aside class="alert" :class="getMessage.type">
    <button class="btn close-msg" @click="closeMessage">
      <i class="fas fa-times"></i>
    </button>
    <p>{{ getMessage.message }}</p>
  </aside>
</template>
<script>
import "./message.css";
export default {
  name: "Message",
  data: () => ({ timeout: null }),
  computed: {
    getMessage() {
      return this.$store.getters.getMessage;
    },
  },
  created() {
    this.timeout = setTimeout(() => this.closeMessage(), 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: {
    closeMessage() {
      this.$store.commit("closeMessage");
    },
  },
};
</script>