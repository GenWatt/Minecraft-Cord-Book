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
      <CordsInput :cordsPack="cordsPack" />
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
import FileReader from "./FileReader/FileReader";
import CordsInput from "./CordInputs/CordInputs";
import "./form.css";
import { v4 as uuid } from "uuid";

export default {
  name: "Form",
  components: {
    FileReader,
    CordsInput,
  },
  data: () => ({
    cordsPack: {
      title: "",
      xCord: "",
      yCord: "",
      zCord: "",
      img: "",
      id: "",
      edited: "",
    },
  }),
  computed: {
    getEdited() {
      return this.$store.getters.getEdited;
    },
    getCurrentPlace() {
      return this.$store.getters.getCurrentPlace;
    },
    getCords() {
      return this.$store.getters.getCords;
    },
  },
  created() {
    this.edited = this.getEdited;

    if (this.edited) {
      const editedCord = this.$store.getters.getCord(this.edited);

      this.cordsPack = Vue.util.extend({}, editedCord);
    }
  },
  methods: {
    hideForm() {
      this.$store.commit("toggleForm");
      this.$store.commit("editedCord", "");
    },
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
      if (this.isIdDuplicated(this.cordsPack.id)) return;
      this.$store.commit("addCord", this.cordsPack);

      this.hideForm();
    },
    addImg(url) {
      this.cordsPack.img = url;
    },
    isIdDuplicated(itemId) {
      if (
        this.getCords[this.getCurrentPlace].filter(({ id }) => id === itemId)
          .length
      )
        return true;
      else return false;
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

  
