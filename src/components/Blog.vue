<template>
  <div class="container mx-auto w-3/4">
    <div
      class="flex gap-8 p-6 mb-4 cursor-pointer"
      v-for="(data, index) in allData"
      :key="index"
      @click="detail(data)"
    >
      <div class="flex-2"><img src="https://via.placeholder.com/150" /></div>
      <div class="flex-1">
        <h2 class="font-bold">{{ data.title }}</h2>
        <p>{{ data.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapGetters(["allData"]),
  },
  methods: {
    getData() {
      this.$store.dispatch("saveData");
    },
    detail(data) {
      this.$router.push({
        path: "/blog/" + data.id,
      });
    },
  },
};
</script>