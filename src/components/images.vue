<template>
  <div class="grid grid-cols-3">
    <div v-for="(image, index) in imageGallery" :key="index">
      <img :src="image.url" alt="" class="w-90 h-90 grid grid-cols-3" />
      <figcaption class="text-center mb-8">{{ image.title }}</figcaption>
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
    ...mapGetters(["imageGallery"]),
  },
  methods: {
    getData() {
      this.$store.dispatch("saveImage");
    },
  },
};
</script>