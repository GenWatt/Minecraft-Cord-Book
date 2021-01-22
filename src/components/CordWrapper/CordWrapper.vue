<template>
  <section>
    <transition name="show">
      <Form v-if="getShowForm" />
    </transition>
    <Search />
  </section>
</template>

<script>
import Form from "./Form/Form";
import Search from "./Search";

export default {
  name: "CordWrapper",
  computed: {
    getShowForm() {
      return this.$store.getters.getShowForm;
    },
  },
  components: { Search, Form },
};
</script>