<template>
  <div>
    <div class="container mx-auto p-6 rounded bg-gray-400 mt-4 w-3/4">
      <img src="https://via.placeholder.com/150" class="h-80 w-full mb-4" />
      <h2 class="text-2xl font-bold text-center">{{ singleRoute.title }}</h2>
      <p class="text-center">{{ singleRoute.body }}</p>
    </div>
    <div class="text-center mt-4">
      <button
        class="bg-green-400 hover:bg-green-700 duration-700 transition ease-in-out transform hover:-translate-y-1 hover:scale-110 text-white px-4 py-2 rounded"
        @click="goToBack"
      >
        Go Back
      </button>
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
    ...mapGetters(["singleRoute"]),
  },
  methods: {
    getData() {
      this.$store.dispatch("singleData", this.$route.params.id);
    },
    goToBack() {
      this.$router.go(-1);
    },
  },
};
</script>