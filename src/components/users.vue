<template>
  <div>
    <table class="border-collapse border border-green-800 w-full">
      <thead>
        <tr>
          <th class="border border-green-600 p-3">Name</th>
          <th class="border border-green-600">Username</th>
          <th class="border border-green-600">Email</th>
          <th class="border border-green-600">Address</th>
          <th class="border border-green-600">Phone</th>
          <th class="border border-green-600">Website</th>
          <th class="border border-green-600">Company Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index" class="text-center">
          <td class="border border-green-600 p-3">{{ user.name }}</td>
          <td class="border border-green-600">{{ user.username }}</td>
          <td class="border border-green-600">{{ user.email }}</td>
          <td class="border border-green-600">{{ user.address.city }}</td>
          <td class="border border-green-600">{{ user.phone }}</td>
          <td class="border border-green-600">{{ user.website }}</td>
          <td class="border border-green-600 ...">{{ user.company.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import { mapGetters } from "vuex";
export default {
  created() {
    this.getData();
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    getData() {
      this.$store.dispatch("usersData");
    },
  },
};
</script>