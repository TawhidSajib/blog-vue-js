<template>
  <div>
    <pre>{{ formatComment }}</pre>
    <div class="container mx-auto p-6 rounded mt-4 w-3/4">
      <img src="https://via.placeholder.com/150" class="h-80 w-full mb-4" />
      <h2 class="text-2xl font-bold">{{ singleRoute.title }}</h2>
      <p class="mb-4">{{ singleRoute.body }}</p>
      <div class="antialiased max-w-screen-sm">
        <h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

        <div
          class="space-y-4 mb-4"
          v-for="(single, index) in formatComment"
          :key="index"
        >
          <div class="flex">
            <div class="flex-shrink-0 mr-3">
              <img
                class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                alt=""
              />
            </div>
            <div
              class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
            >
              <strong>{{ single.email }}</strong>
              <span class="text-xs text-gray-400 ml-3">3:34 PM</span>
              <p class="text-sm">
                {{ single.body }}
              </p>
              <div class="mt-4 flex items-center">
                <div class="flex -space-x-2 mr-2">
                  <img
                    class="rounded-full w-6 h-6 border border-white"
                    src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt=""
                  />
                  <img
                    class="rounded-full w-6 h-6 border border-white"
                    src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt=""
                  />
                </div>
                <div class="text-sm text-gray-500 font-semibold">5 Replies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <button
          v-if="!showAllComment"
          @click="showAllComment = !showAllComment"
          class="bg-green-400 hover:bg-green-700 duration-700 transition ease-in-out hover:scale-110 text-white px-4 py-2 rounded"
        >
          Show More
        </button>
        <button
          v-else
          @click="showAllComment = !showAllComment"
          class="bg-green-400 hover:bg-green-700 duration-700 transition ease-in-out hover:scale-110 text-white px-4 py-2 rounded"
        >
          Show Less
        </button>
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
    return {
      showAllComment: false,
    };
  },
  created() {
    this.getData();
    this.getComment();
  },
  computed: {
    ...mapGetters(["singleRoute", "singleComment"]),
    formatComment() {
      if (!this.showAllComment) return this.singleComment.slice(0, 2);
      return this.singleComment;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("singleData", this.$route.params.id);
    },
    getComment() {
      this.$store.dispatch("saveComment", "?postId=" + this.$route.params.id);
    },
  },
};
</script>