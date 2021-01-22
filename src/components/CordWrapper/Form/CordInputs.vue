<template>
  <div class="cords-inputs">
    <div class="form-box">
      <label for="x-cord">X cord</label>
      <input
        class="cord-input cord"
        type="number"
        name="x-cord"
        v-model="cordsPack.xCord"
        id="x-cord"
      />
    </div>
    <div class="form-box">
      <label for="y-cord">Y cord</label>
      <input
        class="cord-input cord"
        type="number"
        name="y-cord"
        v-model="cordsPack.yCord"
        id="y-cord"
      />
    </div>
    <div class="form-box">
      <label for="z-cord">Z cord</label>
      <input
        class="cord-input cord"
        type="number"
        name="z-cord"
        v-model="cordsPack.zCord"
        id="z-cord"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CordInputs",
  props: ["cordsPack"],
};
</script>