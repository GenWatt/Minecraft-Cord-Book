<template>
  <main>
    <ul class="list" :class="cords.length >= 5 ? 'scroll' : ''">
      <!--when is one cord item -->
      <transition name="show-cords-list" v-if="cords.length === 1">
        <li class="item-box" v-for="cord in cords" :key="cord.id">
          <Cord :cord="cord" :editCord="editCord" />
        </li>
      </transition>
      <!--when is more than one cord item -->
      <transition-group name="show-cords-list" v-else-if="cords.length > 1">
        <li class="item-box" v-for="cord in cords" :key="cord.id">
          <Cord :cord="cord" :editCord="editCord" />
        </li>
      </transition-group>
      <!--when is no cord item -->
      <p class="no-cords" v-else>No cords saved!</p>
    </ul>
  </main>
</template>

<script>
import Cord from "./Cord";
import "../../assets/css/cordList.css";

export default {
  name: "CordList",
  components: { Cord },
  props: ["cords"],
  methods: {
    editCord(id) {
      this.$store.commit("editedCord", id);
      this.$store.commit("toggleForm");
    },
  },
};
</script>