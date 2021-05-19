<template>
  <div>
    <div class="bg-gray-300 grid grid-cols-3">
      <img
        v-for="(image, index) in imageGallery"
        :key="index"
        :src="image.url"
        alt=""
        class="w-90 h-90"
      />
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