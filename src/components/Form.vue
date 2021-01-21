<template>
  <div class="overlay">
    <form class="cord-form" @submit.prevent="submitCords">
      <button class="btn close-form" @click.prevent="hideForm">
        <i class="fas fa-times"></i>
      </button>
      <h1 class="cord-header">Cord Form</h1>
      <label for="title">Title</label>
      <input
        class="cord-input cord-title"
        type="text"
        name="title"
        id="title"
        v-model="cordsPack.title"
      />
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
      <FileReader :addImg="addImg" :image="cordsPack.img" />
      <input
        type="submit"
        class="add-cord btn"
        :value="edited ? 'Edit Cord' : 'Add Cords'"
      />
    </form>
  </div>
</template>
<script>
import Vue from "vue";
import FileReader from "./FileReader.vue";
import "../assets/css/form.css";
import { v4 as uuid } from "uuid";

export default {
  name: "Form",
  components: {
    FileReader,
  },
  props: ["hideForm", "edited"],
  data: () => ({
    cordsPack: {
      title: "",
      xCord: "",
      yCord: "",
      zCord: "",
      img: "",
      id: "",
    },
  }),
  created() {
    if (this.edited) {
      const editedCord = this.$store.getters.getCord(this.edited);

      this.cordsPack = Vue.util.extend({}, editedCord);
    }
  },
  methods: {
    submitCords() {
      if (!this.checkErrors()) return;
      if (this.edited) {
        this.$store.commit("editCord", this.cordsPack);
        return this.$store.commit("setMessage", {
          message: "Successfully edited!",
          type: "success",
        });
      }
      this.cordsPack.id = uuid();
      this.$store.commit("addCord", this.cordsPack);
    },
    addImg(url) {
      this.cordsPack.img = url;
    },
    checkErrors() {
      const { title, xCord, zCord, yCord } = this.cordsPack;
      if (!title || !xCord || !yCord || !zCord) {
        this.$store.commit("setMessage", {
          message: "Please fill title, x-cord, y-cord, z-cord!",
          type: "error",
        });
        return false;
      }
      return true;
    },
  },
};
</script>

  
