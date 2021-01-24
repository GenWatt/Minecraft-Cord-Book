<template>
  <header class="header">
    <h1>{{ appName }}</h1>
  </header>
</template>

<script>
import "./header.css";
export default {
  name: "Header",
  props: ["appName"],
};
</script>