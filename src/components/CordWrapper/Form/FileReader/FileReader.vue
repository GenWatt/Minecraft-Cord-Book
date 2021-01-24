<template>
  <div class="file-box">
    <label class="screenshot-label" for="screenshot">
      <i class="fas fa-arrow-circle-up" v-if="!img && !image"></i>
      <img :src="image ? image : img" alt="screenshot" v-if="img || image" />
    </label>
    <input
      class="screenshot-input"
      @change="ReadFile"
      type="file"
      name="screenshot"
      id="screenshot"
    />
    <p class="file-name">{{ fileName }}</p>
  </div>
</template>
<script>
import "./fileReader.css";
export default {
  name: "FileReader",
  props: ["addImg", "image"],
  data: () => ({ fileName: "", img: "" }),
  methods: {
    ReadFile(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      const ext = ["jpg", "png", "jpeg", "webp"];

      if (!file) return;
      if (!ext.includes(file.type.split("/")[1]))
        return this.$store.commit("setMessage", {
          message: "Only jpg, png, jpeg, webp are avaliable extensions!",
          type: "error",
        });

      this.fileName = file.name;
      reader.onload = (e) => {
        this.img = e.target.result;
        this.addImg(this.img);
      };

      reader.readAsDataURL(file);
    },
  },
};
</script>