<template>
  <div class="item">
    <img v-if="cord.img" class="screenshot" :src="cord.img" alt="screenshot" />
    <img
      class="screenshot"
      v-if="!cord.img"
      src="../../../assets/noimage.png"
      alt="screenshot"
    />
    <h4 class="item-header">{{ cord.title }}</h4>
    <div class="box">
      <button class="btn btn-circle edit" @click="editCord(cord.id)">
        Edit
      </button>
      <button class="btn btn-circle del" @click="deleteCord(cord.id)">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="cord-box">
      <span class="cord-value x-cord">X: {{ cord.xCord }}</span>
      <span class="cord-value y-cord">Y: {{ cord.yCord }}</span>
      <span class="cord-value z-cord">Z: {{ cord.zCord }}</span>
    </div>
  </div>
</template>
<script>
import "./cord.css";
export default {
  name: "Cord",
  props: ["cord", "editCord"],
  methods: {
    deleteCord(id) {
      this.$store.commit("deleteCord", id);
    },
  },
};
</script>