<template>
  <header>
    <h1>Minecraft Cord Book</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  margin: 0 10px;
  background-color: var(--primary-color);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  color: var(--theme-font-color);
}
</style>
