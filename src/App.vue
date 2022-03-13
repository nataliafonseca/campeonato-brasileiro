<template>
  <v-app>
    <app-top-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from "./components/shared/AppTopBar.vue";

export default {
  components: {
    AppTopBar,
  },
};
</script>
